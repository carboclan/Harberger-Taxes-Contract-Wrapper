import { Web3Wrapper } from '@0x/web3-wrapper';
import { SupportedProvider } from 'ethereum-types';
import { networks } from '../build/networks/AABoard.json';
import { AABoardContract, AABoardEvents } from './generated-wrappers/AABoard';

export { AABoardEvents };

export async function getAABoardWrapper(provider: SupportedProvider) {
  const web3Wrapper = new Web3Wrapper(provider);
  const networkId = await web3Wrapper.getNetworkIdAsync();
  const network = networks[networkId];
  const address = network.address.toLowerCase();

  return new AABoardContract(address, provider);
}
