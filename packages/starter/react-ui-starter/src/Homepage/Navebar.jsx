import React, { Component } from 'react';
import './HomePage.css';
import '../assets/solanamees.css';
import img1 from '../assets/LogoMee.png';

import { Link } from 'react-router-dom';
export default class Navebar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg py-lg-2 sticky-top navstyle">
                    {/*  Brand/logo  */}
                    <a class="navbar-brand " className="a1" href="www.com">
                        <img src={img1} width="40" height="40" alt="smiley" />
                    </a>
                    <span className="span1">SOLANA MEES</span>
                    {/* <!-- Links --></nav> */}
                    <ul class="navbar-nav" className="ulist ul">
                        <Link to="/">
                            <li class="nav-item" className="li">
                                <a class="nav-link" href="https://">
                                    <b>Home</b>
                                </a>
                            </li>
                        </Link>
                        <li class="nav-item" className="li">
                            <a class="nav-link" href="https://">
                                <b>My SolMees</b>
                            </a>
                        </li>
                        <li class="nav-item" className="li">
                            <a class="nav-link marketplace" href="https://">
                                <b>Marketplace</b>
                            </a>
                        </li>
                        <li class="nav-item" className="li">
                            <a class="nav-link" href="https://discord.com/invite/hHQEFqnxSF">
                                <b>Discord</b>
                            </a>
                        </li>
                        <li class="nav-item" className="li">
                            <a class="nav-link" href="https://twitter.com/SolanaMees">
                                <b>Twitter</b>
                            </a>
                        </li>
                        <li class="nav-item" className="li">
                            <a class="nav-link" href="https://t.me/SolanaMees">
                                <b>Telegram</b>
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <Link to="/Wallet">
                            <li className="nav-item-connect li">
                                <a class="nav-link" type="button">
                                    <b>Connect</b>
                                </a>
                            </li>
                        </Link>

                        <li className="nav-item-sett" style = {{color: 'white'}}>
                            <a class="nav-link" href="#"  >
                                <i class="far fa-cog"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
