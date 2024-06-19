function Card(){
    let title="cheeta"
    let para="cheeta hi kahde !"
    // let count=0
    // while(count<5){
    //     console.log();
    // }
    let items=[{title:"hello",para:"hello is your class"},{title:"chintu",para:"chintu is your name"}]
    return(
        <>
        {items.map((item,index)=>( <div className="card" style={{ width: "18rem" }}>
  <img src="https://cdn.pixabay.com/photo/2023/08/07/13/44/tree-8175062_640.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
     {item.para}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
        </div>))}
        

        </>
    )
}
export default Card