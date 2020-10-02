import * as React from 'react';

const { useState, useMemo, useEffect, useCallback } = React;

interface switchDataSource {
  label: string;
  value: string | number;
}

interface Iprops {
  dataSource: switchDataSource[];
  defaultValue?: string | number;
  onChange?: Function;
  className?: string;
}

const defaultDataSource: switchDataSource[] = [
  { label: '测试类目122', value: 'value1' }, 
  { label: '测试类目2类目2', value: 'value2' }, 
  { label: '测试类目3', value: 'value3' }, 
]

function App(props: Iprops) {
  const { 
    dataSource = defaultDataSource, 
    defaultValue = '', 
    onChange,
    className = ''
   } = props;

   const [ current, setCurrent ] = useState(0);
   const [ width, setWidth ] = useState(0);
   const [ nodes, setNodes ] = useState([]);

  function handleClickSwitchItem(index: number) {
    setCurrent(index);
    setWidth(getBoxWidth(index));
      if (onChange) {
        onChange(dataSource[index].value);
      }
  }

  function handleLoaded() {
    setNodes(document.querySelectorAll('.switch-item') as any);
  }

  document.addEventListener('DOMContentLoaded', handleLoaded);

  useEffect(() => {
    return () => document.removeEventListener('DOMContentLoaded', handleLoaded);
  }, [ dataSource ]);

  useEffect(() => {
    if (nodes.length > 0) {
      let index = dataSource.findIndex((item: switchDataSource) => item.value === defaultValue);
      index = index === -1 ? 0 : index;
      setWidth(getBoxWidth(index));
      setCurrent(index);
    }
  }, [ nodes, defaultValue, dataSource ])

  const getNodeWidth = useCallback((current) => {
    if (!nodes || !nodes.length) return 0;
    return (nodes[current] as HTMLElement).getBoundingClientRect().width;
  }, [  current, nodes ])

  const leftSum = useMemo(() => {
    if (!nodes) {
      return 0;
    }
    let sum = 0;
    for (let i =0; i<current;i++) {
      sum += ( getNodeWidth(i));
    }
    return sum;
  }, [ current, nodes ])

  const getBoxWidth = useCallback((current: number) => {
    return getNodeWidth(current);
  }, [ current, nodes ]);

  const switchNodes = dataSource.map((item: switchDataSource, index: number) => (
    <div className="switch-item" key={item.value} onClick={handleClickSwitchItem.bind(null, index)}>
      {item.label}
    </div>
  ));

  const prefix = "react-custom-switch";
  const cls = `${prefix} ${className}`

  return (
    <div className={cls}>
      <div className="slider-content">
        <div className="slider-box" style={{ left: leftSum, width }} />
      </div>
      { switchNodes }
    </div>
  )
}

export default App;