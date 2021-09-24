import { MessageSignerWalletAdapter, SignerWalletAdapter, WalletAdapter } from '@solana/wallet-adapter-base';

export enum WalletName {
   
    
    // Clover = 'Clover',
    Coin98 = 'Coin98',
    Ledger = 'Ledger',
    MathWallet = 'MathWallet',
    Phantom = 'Phantom',
    Solflare = 'Solflare',
    SolflareWeb = 'Solflare (Web)',
    Sollet = 'Sollet',
    SolletExtension = 'Sollet (Extension)',
    Solong = 'Solong',

    // WalletConnect = 'WalletConnect',
}

export interface Wallet {
    name: WalletName;
    url: string;
    icon: string;
    adapter: () => WalletAdapter | SignerWalletAdapter | MessageSignerWalletAdapter;
}
