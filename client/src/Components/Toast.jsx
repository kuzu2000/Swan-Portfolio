import { useEffect } from 'react';

const Toast = ({ open, setOpen }) => {
  useEffect(() => {
    let progress = document.querySelector('.toast-progress');

    let bar = 100;
    if (open) {
      let interval = setInterval(() => {
        bar--;
        progress.style.width = `${bar}%`;
        if (bar <= 0) {
          setOpen(false);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [open, setOpen]);

  return (
    <div className={'toast ' + (open ? 'open' : '')}>
      <div className="toast-text">Message Sent!</div>
      <div className="toast-progress"></div>
    </div>
  );
};

export default Toast;
