const page = ({params}) => {

  console.log(params.id);
    
  return (
    <div>hey am a dynamic route and my name is : {params.id}</div>
  )
}

export default page 