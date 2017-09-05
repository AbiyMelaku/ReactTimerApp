var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-Link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-Link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu-text">
          created by <a href="https://github.com/Abiymelaku" target="_target">Abiy Melaku</a>
        </ul>
      </div>
    </div>
  )
}

module.exports = Navigation;
