import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DownArrow from '../../assets/Icons/DownArrow';
import { variants } from '../../helpers/Constants';

export default function Gigs() {
  const [delay, setDelay] = useState(1);
  const [render, setRender] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const loaded = localStorage.getItem('loaded_gigs');
    if (JSON.parse(loaded)) {
      setDelay(0);
    }
    localStorage.setItem('loaded_gigs', true);
    setRender(true);
  }, []);

  return (
    render && (
      <div className='text-center mt-5'>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 2 }}
        >
          Here you can look for Torre's jobs!
        </motion.h1>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: delay * 2, duration: 2 }}
        >
          <DownArrow />
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: delay * 3, duration: 2 }}
          className='input-group mb-3 mt-4'
        >
          <input
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
            placeholder='Insert job id here'
            type='text'
            className='form-control'
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </motion.div>
        {value !== '' ? (
          <iframe
            title='Torres gig'
            src={`https://torre.co/jobs/${value}`}
            style={{
              width: '100%',
              height: '1020px',
              border: 'none',
              overflow: 'hidden',
            }}
          />
        ) : null}
      </div>
    )
  );
}
