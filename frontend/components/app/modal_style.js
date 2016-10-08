export default ({
  overlay : {
    backgroundColor   : 'rgba(161, 159, 168, 0.47)'
  },
  content : {
    top                        : '100px',
    left                       : 'calc(100vw/2)',
    border                     : '1px solid #ccc',
    backgroundImage           : '-webkit-linear-gradient(top, #6a6598, #e39b99)',
    backgroundImage           : '-moz-linear-gradient(top, #6a6598, #e39b99)',
    backgroundImage           : '-ms-linear-gradient(top, #6a6598, #e39b99)',
    backgroundImage           : '-o-linear-gradient(top, #6a6598, #e39b99)',
    backgroundImage           : 'linear-gradient(to bottom, #6a6598, #e39b99)',
    overflow                   : 'hidden',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    opacity                    : '0',
    transition                 : 'opacity 1s',
    boxShadow                  : '0 0 1em rgb(130, 120, 131)',
    transform                  : 'translateX(-50%)',
    position                   : 'fixed',
    maxWidth                   : '500px',
    width                      : '350px',
    minWidth                   : '300px',
    height                     : '400px',
    zIndex                     : '2000',
    display                    : 'flex'
  }
});
