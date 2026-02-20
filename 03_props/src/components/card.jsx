

const card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="profile_img" />
        <h1>{props.user} {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
    </div>
  )
}

export default card
