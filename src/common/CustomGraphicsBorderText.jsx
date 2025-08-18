import  { useEffect, useRef, useState } from 'react';

const CustomGraphicsBorderText = ({
  position = 'top',
  bgColor = 'transparent',
  size = 300,
  style = {},
}) => {
  const textUnit = 'Custom Graphics';
  const textMeasureRef = useRef(null);
  const [repeatText, setRepeatText] = useState('');

  useEffect(() => {
    if (!textMeasureRef.current) return;

    const dimension =
      position === 'left' || position === 'right'
        ? textMeasureRef.current.offsetHeight
        : textMeasureRef.current.offsetWidth;

    if (dimension === 0) return;

    const count = Math.ceil(size / dimension) + 1;
    setRepeatText(Array(count).fill(textUnit).join(' '));
  }, [size, position]);

  const commonClasses = 'absolute pointer-events-none overflow-hidden';
  let wrapperClasses = '';
  let textClasses = 'inline-block text-xs leading-none whitespace-nowrap  overflow-hidden';
  const customStyles = {};

  switch (position) {
    case 'top':
      wrapperClasses = 'left-0 right-0 h-5 top-0';
      customStyles.maxWidth = '100%';
      break;
    case 'bottom':
      wrapperClasses = 'left-0 right-0 h-5 bottom-0';
      customStyles.transform = 'rotate(180deg)';
      customStyles.maxWidth = '100%';
      break;
    case 'left':
      wrapperClasses = 'top-0 bottom-0 w-5 left-0 flex items-center justify-center';
      customStyles.writingMode = 'sideways-rl';
      customStyles.transform = 'rotate(180deg)';
      break;
    case 'right':
      wrapperClasses = 'top-0 bottom-0 w-5 right-0 flex items-center justify-center';
      customStyles.writingMode = 'vertical-rl';
      break;
    default:
      break;
  }

  return (
    <div
      className={`${wrapperClasses} ${commonClasses} `}
      style={{ backgroundColor: bgColor, ...style }}
    >
      <span
        ref={textMeasureRef} // keval cstom graohics text ke dimensions nikalne ke liye use kara hai
        className="invisible absolute text-xs whitespace-nowrap"
        style={
          position === 'left' || position === 'right'
            ? { writingMode: 'vertical-rl' }
            : {}
        }
      >
        {textUnit}
      </span>

      <span className={textClasses} style={customStyles}>
        {repeatText}
      </span>
    </div>
  );
};

export default CustomGraphicsBorderText;