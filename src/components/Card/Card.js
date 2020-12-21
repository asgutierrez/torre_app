import './Card.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Accordion from '../Accordion/Accordion';

export default function Card(data) {
  const { education, person, jobs, projects } = data.info;

  return (
    data && (
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-4'>
            <div className='profile-card-2'>
              <img
                src={
                  person !== undefined && person.picture
                    ? person.picture
                    : 'https://picsum.photos/740/420/?random'
                }
                alt={person.publicId}
                className='img img-responsive'
              />
              <div className='profile-name'>
                {person.name !== null || person.name !== undefined
                  ? person.name
                  : 'Unknown'}
              </div>
              <div className='profile-username'>@{person.publicId}</div>
              <div className='profile-icons'>
                <a className='mr-5' href='#'>
                  <FaFacebookF className='fa' />
                </a>
                <a className='mr-5' href='#'>
                  <FaTwitter className='fa' />
                </a>
                <a className='mr-5' href='#'>
                  <FaLinkedinIn className='fa' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <Accordion education={education} jobs={jobs} projects={projects} />
          </div>
        </div>
      </div>
    )
  );
}
