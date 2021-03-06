import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

class Header extends React.Component {
  state = {
    previous: 0,
    current: 0,
    navDisplay: false
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, true);
    setTimeout(() => {
      this.setState({ navDisplay: true });
    }, 2000);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll, true);
  };

  handleScroll = event => {
    const { className } = event.target;
    if (className === 'root-show' || className === 'root-hide') {
      const { scrollTop } = event.srcElement;
      this.setState(prevState => {
        if (prevState.current !== scrollTop) {
          return {
            previous: prevState.current,
            current: scrollTop
          };
        }
      });
    }
  };

  render() {
    const { current, previous } = this.state;
    return (
      <header
        className={current > previous ? 'nav-header-hide' : 'nav-header-show'}
      >
        <div className={current > previous ? 'logos-hide' : 'logos-show'}>
          <img
            alt="Paul Kim Signature"
            className={current > previous ? 'logo-hide' : 'logo-show'}
            src="https://res.cloudinary.com/paulkim/image/upload/v1552394091/images/misc/Paul-kim-logo.png"
          />
          <img
            alt="Weather icon"
            className={current > previous ? 'logo-icon-hide' : 'logo-icon-show'}
            src={require(`../../assets/icons/sunglasses.svg`)}
          />
        </div>
        <Navigation {...this.state} />
      </header>
    );
  }
}

export default Header;
