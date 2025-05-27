import { Transform } from "stream";
import { stdin, stdout } from "process";


stdin.pipe(new Transform({
  transform(chunk, _enconding, callback) {
    if(chunk instanceof Buffer) {
      callback(null, chunk.toString().toUpperCase())
    }
  }
})).pipe(stdout)
