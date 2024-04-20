import Draggable from 'react-draggable';
import Card from '@/components/Card';
import { useWindowSize } from 'usehooks-ts';

const DragAndDrop = () => {

  const { width = 0, height = 0 } = useWindowSize();
  console.log(width, height);
  return (
    <>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        scale={1}
        bounds={{left: 0, top: 0, right: width, bottom: height}}
      >
        <Card className='handle'/>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 50}}
        scale={1}
      >
        <Card className='handle'/>
      </Draggable>
    </>
  );
};

export default DragAndDrop;