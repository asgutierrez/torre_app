import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DownArrow from '../../assets/Icons/DownArrow';
import { variants } from '../../helpers/Constants';
import { fetchUsername } from '../../helpers/Requests';
import Accordion from '../Accordion/Accordion';
import Card from '../Card/Card';

export default function Users() {
  const [delay, setDelay] = useState(1);
  const [render, setRender] = useState(false);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const loaded = localStorage.getItem('loaded_users');
    if (JSON.parse(loaded)) {
      setDelay(0);
    }
    localStorage.setItem('loaded_users', true);
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
          Let's begin!,
        </motion.h1>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: delay, duration: 2 }}
        >
          look for Torre's users
        </motion.h1>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: delay * 2, duration: 2 }}
        >
          and find useful insights
        </motion.h1>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: delay * 3, duration: 2 }}
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
            type='text'
            className='form-control'
            onChange={async e => {
              try {
                setSearch(await fetchUsername(e.target.value));
              } catch (error) {
                setSearch(null);
              }
            }}
          />
        </motion.div>
        {search !== null ? <Card info={search} /> : null}
      </div>
    )
  );
}
