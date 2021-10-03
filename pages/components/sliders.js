import * as React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { styled, alpha, Box } from '@mui/system';
import styles from '../components/styles/untSlider.module.css'
import SliderUnstyled from '@mui/core/SliderUnstyled';
import { useState, useEffect } from 'react';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import { useCallback } from 'next/router';


const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? '#1976d2' : '#90caf9'};
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.38;
    color:var(--theme-default-sliderRial);

  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
  }
  & .MuiSlider-mark{
    position: absolute;
    height: 7px;
    width:7px;
    top: 11px;
    border-radius: 100%;
    background-color:#1A0C3A;

  }
  & .MuiSlider-markLabel{
    margin-top: 15px;
    position: absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    color: var(--theme-default-slider);
    transform: translateX(-50%);
  }
  @media(max-width:640px){
    & .MuiSlider-markLabel{
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: var(--theme-default-slider);
      transform: translateX(-50%);
    }
  }
  & .MuiSlider-thumb {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid var(--theme-default-sliderRadius);
    background-color: var(--theme-default-sliderThumb);

    :hover,
    &.Mui-focusVisible {
      box-shadow: 0 0 0 0.25rem ${alpha(
    theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
    0.15,
  )};
    }

    &.Mui-active {
      box-shadow: 0 0 0 0.25rem ${alpha(
    theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
    0.3,
  )};
    }
  }
`,
);
const marks = [
  {
    value: 15,
    label: 'Prehistoric',
  },
  {
    value: 50,
    label: 'XXI',
  },
  {
    label: 'Space Oddity',
    value: 85,

  },
];


export default function UnstyledSlider() {
  const isTheme = useTheme();

  const themeToValue = (name) => {
    if (name === THEME_Prehistori) {
      return 15
    }
    if (name === THEME_Standart) {
      return 50
    }
    if (name === THEME_Future) {
      return 85
    }
  }

  const [count, setCount] = React.useState(themeToValue(isTheme.theme));

  const handleChange = (event, newValue) => {
    setCount(newValue);
  };

  const valuetext = React.useCallback((value) => {
    if (value <= 40) {
      isTheme.change(THEME_Prehistori)
    }
    if (value >= 40) {
      isTheme.change(THEME_Standart)
    }
    if (value >= 70) {
      isTheme.change(THEME_Future)
    }
  }, [isTheme])

  React.useEffect(() => valuetext(count), [count, valuetext]);


  return (
    <>
      <div className={styles.container_text}>
        Change the era
      </div>
      <div className={styles.container_slider}>
        <Box >
          <StyledSlider
            track={false}
            aria-label="Restricted valueso"
            onChange={handleChange}
            defaultValue={50}
            value={count}
            marks={marks}
          />
        </Box>
      </div>
    </>
  );
}
