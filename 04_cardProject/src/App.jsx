import Card from './components/Card'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      post: "Frontend Engineer",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/001/199/813/small/apple.png",
      companyName: "Apple",
      post: "iOS Developer",
      datePosted: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/493/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      post: "Cloud Engineer",
      datePosted: "10 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
      companyName: "Amazon",
      post: "Backend Developer",
      datePosted: "3 weeks ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/055/210/890/small/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
      companyName: "Meta",
      post: "React Engineer",
      datePosted: "1 week ago",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Remote (India)"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      post: "UI Engineer",
      datePosted: "4 weeks ago",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/020/975/563/small/tesla-logo-tesla-icon-transparent-free-png.png",
      companyName: "Tesla",
      post: "Software Engineer",
      datePosted: "6 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      companyName: "NVIDIA",
      post: "AI Engineer",
      datePosted: "10 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/020/975/669/small/samsung-logo-samsung-icon-transparent-free-png.png",
      companyName: "Samsung",
      post: "Android Developer",
      datePosted: "8 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/049/175/038/small/intel-logo-intel-corporation-is-an-american-multinational-corporation-and-technology-free-png.png",
      companyName: "Intel",
      post: "Systems Engineer",
      datePosted: "2 months ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hour",
      location: "Bangalore, India"
    }
  ];


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            post={elem.post}
            datePosted={elem.datePosted}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      })}
    </div>
  )
}

export default App
