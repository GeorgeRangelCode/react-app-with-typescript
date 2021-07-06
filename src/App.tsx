import  { useEffect, useRef, useState } from 'react';
import './App.css';
import List from "./components/List"
import Form from './components/Form';
import { Sub } from "./types"

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
 }

const initialState = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moredador a veces'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(initialState)
  }, [])

  const handleNewSubs = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSubs} />
    </div>
  );
}

export default App;
