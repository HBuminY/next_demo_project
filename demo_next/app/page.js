async function getData(apiURL){
  const res = await fetch(apiURL, { next: { revalidate: 5} });
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

//components
async function ApiDisplay(){
  const data = await getData("https://dog.ceo/api/breeds/image/random")

  return(
    <div>
        <h1>
          Here is a random dog:
        </h1>
        <img className="h-64 w-64 object-cover" src={data.message}/>
        <p>(Image source is fetched from an api in the server side, revalidation interval is 5 seconds)</p>
    </div>
  )
}

function UserForm(){
  return(
    <form action="#" className="p-5 flex flex-col space-y-2">
          <input name="email" type="text" placeholder="e-mail"/>
          <input name="username" type="text" placeholder="Name"/>
          <input name="surname" type="text" placeholder="Surname"/>
          <input name="password" type="text" placeholder="Password"/>
          <button type="submit">Submit</button>
      </form>
  )
}

function UserDataDisplay(query){
  if(Object.keys(query.query).length>0){
    return(
      <p>
        {JSON.stringify(query)}
      </p>
    )
  }
}

//page content
export default function Page({params, searchParams}) {  

  return(
    <div className="h-[90%] relative flex flex-row">
      <div className="h-full w-1/2 bg-slate-50">
        <h1>Hello World!</h1>
        <ApiDisplay/>
      </div><br/>
      
      <div className="h-full w-1/2 bg-slate-200">
        <UserForm/>
        <UserDataDisplay query={searchParams}/>
      </div>
    </div>
  )
}