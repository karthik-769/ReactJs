import Card from "./components/card"

function App() {
  return (
    <div className="parent">
      <Card  user ="Karthik reddy" age={25} img="https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
      <Card  user ="Suresh reddy" age={30} img="https://plus.unsplash.com/premium_photo-1723428295291-d2abb18bc76c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card  user ="Ramesh reddy" age={35} img="https://images.unsplash.com/photo-1763987209766-d9bb8836c0e2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>     
    </div>
  )
}

export default App
