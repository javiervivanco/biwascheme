import * as _ from "../deps/underscore-esm.js"
import { to_write } from "./_writer.js"

//
// Values
//
class Values {
  constructor(values){
    this.content = values;
  }

  to_write(){
    return "#<Values " +
             this.content.map(to_write).join(" ") +
           ">";
  }
}

export default Values;
