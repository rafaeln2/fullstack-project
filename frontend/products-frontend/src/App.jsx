import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Button from './Button'
import { HelloWithoutJSX } from './HelloWorld'
import { UserProfile } from './UserProfile'
import { StyledForm } from './StyledForm'
import { CandidateProfile } from './CandidateProfile'
import { Product } from './Product'
import { Greeting } from './Greeting'
import { CardWrapper } from './CardWrapper'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import { NameList } from './NameList'
import { Alert } from './Alert'
import { CustomButton } from './CustomButton'
import { Contact } from './Contact'
import { NewsLetter } from './NewsLetter'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { SimpleCounter } from './SimpleCounter'
import { PrevStateCounter } from './PrevStateCounter'
import { BatchingCounter } from './BatchingCounter'
import { NewUserCard } from './NewUserCard'
import { ToDoList } from './ToDoList'

function App() {
  // const [count, setCount] = useState(0)
  // const defaultPage = <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>

  // const productsList = [
  //   {id:1, title:"Notebook", price:1000, inStock:true, categories:["Electronics", "Computers", "Gaming"]}, 
  //   {id:2, title:"PS4", price:2465, inStock:true, categories:["Electronics", "Computers", "Gaming"]}]
  return (
    <div className="App">
      <ToDoList />
      <NewUserCard />
      <BatchingCounter />
      <PrevStateCounter />
      <SimpleCounter />
      {/* <LoginCard />
      <Counter />
      <Menu/>
      <Contact />
      <NewsLetter />
      <CustomButton text="like"/>
      <Alert>Your changes are saved!</Alert>
      <Alert type="error">Error</Alert>
      <NameList />
      <ProductList products={productsList} />
      <UserDetails name="Rafael" isOnline={true} />

      <CardWrapper title="Card 1" >
        <p>This is the card content</p>
      </CardWrapper>

      <Greeting message="Hello" name="Rafael"/>
      <Greeting message="Good morning" />
      <Greeting message="Hello" name="Rafael"/>

      <p>Hello Vite + React!</p>
      <Welcome name="Rafael" alias="função"/>
      <Welcome name="Joao" alias="chefe"/>

      <Button />
      <HelloWithoutJSX />
      <UserProfile />
      <StyledForm />
      <CandidateProfile />
      <Product title="Notebook" price={1000} inStock={true} categories={["Electronics", "Computers", "Gaming"]} /> */}
    </div>
  )
}



export default App
