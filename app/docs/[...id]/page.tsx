import styles from "./style.module.css"

const page = ({params}) => {

  console.log(params.id);
    
  return (
    <div className={styles.title}>hey am a dynamic route and my name is : {params.id}</div>
  )
}

export default page 