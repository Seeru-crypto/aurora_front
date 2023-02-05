import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from './state/store';
import { setIsFilterActive } from './state/appSlice';

interface FilterProps {}

const FilterPane = (props: FilterProps) => {
  const isFilterVisible: boolean = useAppSelector((state) => state.app.isFilterActive);
  const dispatch = useAppDispatch();

  return (
    <FilterStyle isFilterVisible={isFilterVisible}>
      <button className="w3-bar-item w3-button w3-large" onClick={() => dispatch(setIsFilterActive(false))}>
        Close &times;
      </button>
      <a href="#" className="w3-bar-item w3-button">
        Link 1
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 2
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 3
      </a>
    </FilterStyle>
  );
};
export default FilterPane;

// background-color: ${(props) => props.activeTheme === ActiveTheme.NIGHT && props.theme.background};

const FilterStyle = styled.div<{ isFilterVisible: boolean }>`
  background-color: orange;
  display: flex;
  flex-direction: column;
  top: 0;
  position: sticky;
  height: 100vh;
`;
