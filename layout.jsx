
export const metadata = {
    title:"DYNEIT"
}

const Rootlayout = ({children}) => {

  return (
    <html lang="en">
    <body>
        <div className="main">
        
        </div>
        <main>
            {children}
        </main>
        
    </body>
    
    </html>
  )
}

export default Rootlayout