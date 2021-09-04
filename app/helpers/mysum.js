import { helper } from '@ember/component/helper';

function sum_it_up([...args]){
  return args.reduce((total, value) => total + value);
}

export default helper(sum_it_up);
