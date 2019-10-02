import { Web3Wrapper } from '@0x/web3-wrapper';
import { networks } from '../build/contracts/AABoard.json';
import { AABoardContract, AABoardEvents } from './generated-wrappers/AABoard';

export { AABoardEvents };

export async function getAABoardWrapper(ethereum) {
  const web3Wrapper = new Web3Wrapper(ethereum);
  const networkId = await web3Wrapper.getNetworkIdAsync();
  const network = networks[networkId];
  const address = network.address;

  return new AABoardContract(address, ethereum);
}