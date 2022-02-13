const binary =
  '01010000 01001100 00100000 11101101 10011000 10011100 11101100 10001011 10101100\n11101100 10010011 10110000 00001010 00001010\n01101101 01100101 01101101 01100010 01100101 01110010 01110011\n11101010 10110011 10100100 11101100 10011101 10110100\n11101011 10101111 10111100 11101011 10101111 10111100\n11101011 10111001 10001000 11101100 10111000 10100000\n11101100 10011011 10111001 11101011 10100110 10110000 11101100 10011101 10110100\n11101101 10001111 10110100\n11101101 10010101 10110100 11101011 10001011 10101100\n01110011 01110000 01100101 01100011 01101001 01100001 01101100 00100000 01110100\n01101000 01100001 01101110 01101011 01110011 00100000 01110100 01101111 00100000\n11101101 10000101 10001100 11101100 10011000 10100100';
// PL 혜심쓰

// 곤이
// 민민
// 비비
// 빈츠
// 웹린이
// 폴
// 해달

// special thanks to 테오

const cppHelloWorld = `#include <iostream>
  
  int main() {
      std::cout << "Hello World!";
      return 0;
  }`;

const index = `import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
   switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
        
      default:
        return state;
    }
  },
user,
  post,
});

export default rootReducer;`;

export const codes = [binary, cppHelloWorld, index];
