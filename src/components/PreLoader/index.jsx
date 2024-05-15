import { useEffect } from 'react';
import loadingPace from '@common/loadingPace';

const PreLoader = () => {
  useEffect(() => {
    // setTimeout(() => loadingPace(), 1);
  }, [])

  return (
    <div id=""></div>
  )
}

export default PreLoader