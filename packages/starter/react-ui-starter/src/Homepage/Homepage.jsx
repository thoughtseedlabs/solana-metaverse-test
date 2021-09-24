import React, { Component } from 'react';
import img2 from '../assets/charac.png';
import img3 from '../assets/metaplex.png';
import img4 from '../assets/equ.png';
import img5 from '../assets/payless.png';

import './HomePage.css';
import '../assets/solanamees.css';

class HomePage extends Component {
    render() {
        return (
            <div className="body">
                <div className="div1">
                    <div className="container-fluid">
                        <ul className="ul">
                            <li className="li">
                                <span>
                                    <img src={img2} width="40" height="40" alt="smiley" />
                                </span>
                                <h3>
                                    <b>Characters</b>
                                </h3>
                                <p>
                                    20,000 3D voxel characters, where each one <br />
                                    can be minted as an NFT on the Solana
                                    <br />
                                    Blockchain. When minting a SolMee, you <br />
                                    are also registered on the blockchain as its
                                    <br />
                                    creator, making you eligible to receive fees <br />
                                    for any future trades of that NFT.
                                </p>
                            </li>
                            <hr className="hr" />
                            <li className="li">
                                <span>
                                    <img src={img3} width="40" height="40" alt="metaplex" />
                                </span>
                                <h3>
                                    <b>Metaplex</b>
                                </h3>
                                <p>
                                    Each SolMee is minted using the Metaplex <br />
                                    contract, a Solana NFT standard. Each <br />
                                    Metaplex NFT is part of a wider Solana <br />
                                    ecosystem and is tradeable on Metaplex-
                                    <br />
                                    based marketplaces.
                                </p>
                            </li>
                            <hr className="hr" />
                            <li className="li">
                                <span>
                                    <img src={img4} width="40" height="40" alt="metaplex" />
                                </span>
                                <h3>
                                    <b>Equal Chances</b>
                                </h3>
                                <p>
                                    When minting a Solana Mee on the <br />
                                    blockchain, a random one will be created. <br />
                                    This gives everyone a fair chance at <br />
                                    obtaining any currently unminted Solana
                                    <br />
                                    Mee. The ones already created can be <br />
                                    traded on our marketplace.
                                </p>
                            </li>
                            <hr className="hr" />
                            <li className="li">
                                <span>
                                    <img src={img5} width="40" height="40" alt="metaplex" />
                                </span>
                                <h3>
                                    <b>
                                        Pay less for getting in
                                        <br /> early!
                                    </b>
                                </h3>
                                <p>
                                    The mint price will be starting at 2 SOL.
                                    <br />
                                    However, after every 2500 minted SolMees,
                                    <br />
                                    the price will go up by an additional 0.5 SOL.
                                    <br />
                                    Be among the first to get the best deal for
                                    <br />
                                    you SolMee!
                                </p>
                            </li>
                        </ul>
                    </div>
                    <button className="button btn">
                        <b>Own a Solana Mee Now!</b>
                    </button>
                </div>
            </div>
        );
    }
}

export default HomePage;
