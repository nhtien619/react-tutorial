import React from "react";

// function FuctionComponent() {
//     return (
//         <div>This is function Component here !!!</div>
//     );
// }



// Arrow function
const FuctionComponent = (props) => {


    console.log('>> props ', props);
    let { name, age, jobs } = props;


    return (
        <>
            <div>hello arrow function</div>
            <div><button>Show</button></div>
            <label>Name: {name}({age})</label>
            {

                jobs.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    )
                })
            }
            <div><button>Hide</button></div>
        </>
    )
}

export default FuctionComponent;