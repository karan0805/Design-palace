import { NextMiddleware, NextResponse } from 'next/server';
import withAuthorization from './middlewares/withAuthorization';

const mainMiddleware: NextMiddleware = () => {
  const res = NextResponse.next();
  //other middleware operations
  return res;
};
export default withAuthorization(mainMiddleware, ['/admin']);
