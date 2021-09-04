import { helper } from '@ember/component/helper';

function multiply_them_all([...args]) {
  return args.reduce((total, value) => total * value);
}

export default helper(multiply_them_all);
