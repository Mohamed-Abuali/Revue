import { exec } from "child_process";


export function runScan(){
  console.log("clicked")
  return new Promise((resolve,reject) => {
  exec("npm run scan",(error, stdout, stderr) => {
    if(error){
      reject(error)
    }
    else resolve(stdout)
  })
})
}