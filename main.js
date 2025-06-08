
function createSection(title, description, codeImg, img1, img2, img3) {
  return `
    <section>
        <h2>${title}</h2>
        <p class="description">${description}</p>
        <div class="image-container">
            <div class="placeholder code">
                <img src="${codeImg}" alt="Code ${title}" />
                <div class="label">Code</div>
            </div>
            <div class="placeholder">
                <img src="${img1}" alt="Ví dụ ${title} 1" />
                <div class="label">Ví dụ 1</div>
            </div>
            <div class="placeholder">
                <img src="${img2}" alt="Ví dụ ${title} 2" />
                <div class="label">Ví dụ 2</div>
            </div>
            <div class="placeholder">
                <img src="${img3}" alt="Ví dụ ${title} 3" />
                <div class="label">Ví dụ 3</div>
            </div>
        </div>
    </section>
  `;
}

const sections = [
  createSection("1. forEach()", "Duyệt qua từng phần tử trong mảng và thực hiện hành động.", "./images/foreach/foreach-code.png", "./images/foreach/foreach1.png", "./images/foreach/foreach2.png", "./images/foreach/foreach3.png"),
  createSection("2. map()", "Tạo ra mảng mới từ mảng gốc bằng cách biến đổi từng phần tử.", "./images/map/map-code.png", "./images/map/map1.png", "./images/map/map2.png", "./images/map/map3.png"),
  createSection("3. filter()", "Lọc ra các phần tử thỏa mãn điều kiện trong mảng.", "./images/filter/filter-code.png", "./images/filter/filter1.png", "./images/filter/filter2.png", "./images/filter/filter3.png"),
  createSection("4. reduce()", "Tổng hợp các phần tử của mảng thành một giá trị duy nhất.", "./images/reduce/reduce-code.png", "./images/reduce/reduce1.png", "./images/reduce/reduce2.png", "./images/reduce/reduce3.png"),
  createSection("5. find()", "Tìm phần tử đầu tiên trong mảng thỏa mãn điều kiện.", "./images/find/find-code.png", "./images/find/find1.png", "./images/find/find2.png", "./images/find/find3.png"),
  createSection("6. findIndex()", "Tìm vị trí (index) của phần tử đầu tiên thỏa mãn điều kiện.", "./images/findindex/findindex-code.png", "./images/findindex/findindex1.png", "./images/findindex/findindex2.png", "./images/findindex/findindex3.png"),
  createSection("7. some()", "Trả về true nếu ít nhất một phần tử thỏa mãn điều kiện.", "./images/some/some-code.png", "./images/some/some1.png", "./images/some/some2.png", "./images/some/some3.png"),
  createSection("8. every()", "Trả về true nếu tất cả các phần tử đều thỏa mãn điều kiện.", "./images/every/every-code.png", "./images/every/every1.png", "./images/every/every2.png", "./images/every/every3.png"),
  createSection("9. includes()", "Kiểm tra mảng có chứa giá trị cụ thể hay không.", "./images/includes2/includes-code.png", "./images/includes2/includes1.png", "./images/includes2/includes2.png", "./images/includes2/includes3.png"),
  createSection("10. indexOf()", "Tìm vị trí đầu tiên của phần tử trong mảng.", "./images/indexof/indexof-code.png", "./images/indexof/indexof1.png", "./images/indexof/indexof2.png", "./images/indexof/indexof3.png"),
  createSection("11. lastIndexOf()", "Tìm vị trí cuối cùng của phần tử trong mảng.", "./images/lastindexof/lastindexof-code.png", "./images/lastindexof/lastindexof1.png", "./images/lastindexof/lastindexof2.png", "./images/lastindexof/lastindexof3.png"),
  createSection("12. concat()", "Nối nhiều mảng lại với nhau.", "./images/concat/concat-code.png", "./images/concat/concat1.png", "./images/concat/concat2.png", "./images/concat/concat3.png"),
  createSection("13. slice()", "Trích xuất một phần của mảng mà không làm thay đổi mảng gốc.", "./images/slice/slice-code.png", "./images/slice/slice1.png", "./images/slice/slice2.png", "./images/slice/slice3.png"),
  createSection("14. splice()", "Thêm hoặc xóa phần tử tại một vị trí cụ thể trong mảng.", "./images/splice/splice-code.png", "./images/splice/splice1.png", "./images/splice/splice2.png", "./images/splice/splice3.png"),
];


document.getElementById("content").innerHTML = sections.join('');

// forEach 
Array.prototype.forEach2 = function(callBack , thisAgr) {
  const length = this.length ; 
  for(let i = 0 ; i < length ; i++) {
     if(i in this) {
      callBack.call(thisAgr , this[i] , i , this) ; 
     }
  }
}

// const arrs = [1, 2, 3];

// console.log("forEach:");
// arrs.forEach((value, index) => {
//   console.log(`index ${index}: ${value}`);
// });

// console.log("forEach2:");
// arrs.forEach2((value, index) => {
//   console.log(`index ${index}: ${value}`);
// });



// const log = {
//   prefix: "Giá trị:",
// };

// const nums = [4, 5];

// function logValue(value) {
//   console.log(this.prefix, value);
// }

// console.log("forEach:");
// nums.forEach(logValue, log);     

// console.log("forEach2:");
// nums.forEach2(logValue, log);    




// const s = [1, , 3];  

// console.log("forEach:");
// s.forEach((value, i) => console.log(i, value));  

// console.log("forEach2:");
// s.forEach2((value, i) => console.log(i, value)); 


// map 
Array.prototype.map2 = function (callBack , thisAgr) {
  const length = this.length ; 
  const newArr = [] ; 
  for(let i = 0 ; i < length ; i++) {
    if(i in this) {
      newArr[i] = (callBack.call(thisAgr , this[i] , i , this)) ;
    }
  }
  return newArr ;
}

// const numbers = [1, 2, 3];

// console.log("map:", numbers.map(x => x * 2));         
// console.log("map2:", numbers.map2(x => x * 2));       



// const users = ["Alice", "Bob"];
// const user = {
//   prefix: "User: ",
// };

// function addPrefix(name) {
//   return this.prefix + name;
// }

// console.log("map:", users.map(addPrefix, user));    
// console.log("map2:", users.map2(addPrefix, user));   


// const s = [1, , 3];  

// console.log("map:", s.map((v, i) => v + 1));      
// console.log("map2:", s.map2((v, i) => v + 1));   


// filter 
Array.prototype.filter2 = function (callBack, thisAgr) {
  const length = this.length;
  const newArr = [];
  for (let i = 0; i < length; i++) {
    if (i in this && callBack.call(thisAgr, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// reduce
Array.prototype.reduce2 = function (callBack, initialValue) {
  const length = this.length;
  let accumulator = initialValue;

  let startIndex = 0;

  if (accumulator === undefined) {
    if (length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < length; i++) {
    if (i in this) {
      accumulator = callBack(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};


// const arr1 = [1, 2, 3, 4];

// console.log("reduce:");
// console.log(arr1.reduce((acc, val) => acc + val, 0)); // 10

// console.log("reduce2:");
// console.log(arr1.reduce2((acc, val) => acc + val, 0)); // 10

// const arr2 = [1, 2, 3, 4];
// console.log("reduce:");
// console.log(arr2.reduce((acc, val) => acc * val)); // 24

// console.log("reduce2:");
// console.log(arr2.reduce2((acc, val) => acc * val)); // 24

// const s = [1, , 3, 4];

// console.log("reduce:");
// console.log(s.reduce((acc, val) => acc + val, 0)); // 8 

// console.log("reduce2:");
// console.log(s.reduce2((acc, val) => acc + val, 0)); // 8


//find 
Array.prototype.find2 = function (callBack, thisAgr) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this && callBack.call(thisAgr, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};


// const arr1 = [5, 12, 8, 130, 44];
// console.log("find:");
// console.log(arr1.find(x => x > 10)); // 12
// console.log("find2:");
// console.log(arr1.find2(x => x > 10)); // 12

// const s = [1, , 3, 4];
// console.log("find:");
// console.log(s.find(x => x === undefined)); // undefined 
// console.log("find2:");
// console.log(s.find2(x => x === undefined)); // undefined

// const arr2 = [1, 3, 5];
// console.log("find:");
// console.log(arr2.find(x => x > 10)); // undefined 
// console.log("find2:");
// console.log(arr2.find2(x => x > 10)); // undefined

//findIndex
Array.prototype.findIndex2 = function (callBack, thisAgr) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (callBack.call(thisAgr, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

// const arr1 = [5, 12, 8, 130, 44];
// console.log("findIndex:");
// console.log(arr1.findIndex(x => x > 10));
// console.log("findIndex2:");
// console.log(arr1.findIndex2(x => x > 10)); 


// const s = [1, , 3, 4];
// console.log("findIndex:");
// console.log(s.findIndex(x => x === undefined)); // 1
// console.log("findIndex2:");
// console.log(s.findIndex2(x => x === undefined)); // 1


// some
Array.prototype.some2 = function (callBack, thisAgr) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this && callBack.call(thisAgr, this[i], i, this)) {
      return true;
    }
  }
  return false;
};
// const arr1 = [2, 5, 8, 1, 4];
// console.log("some:");
// console.log(arr1.some(x => x > 7)); 
// console.log("some2:");
// console.log(arr1.some2(x => x > 7)); 

// const s = [1, , 3, 4];
// console.log("some:");
// console.log(s.some(x => x === undefined)); 
// console.log("some2:");
// console.log(s.some2(x => x === undefined)); 


// const arr2 = [1, 3, 5];
// console.log("some:");
// console.log(arr2.some(x => x > 10)); 
// console.log("some2:");
// console.log(arr2.some2(x => x > 10));
// every
Array.prototype.every2 = function (callBack, thisAgr) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this && !callBack.call(thisAgr, this[i], i, this)) {
      return false;
    }
  }
  return true;
};
// const arr1 = [];
// console.log("every:");
// console.log(arr1.every(x => x > 0)); 
// console.log("every2:");
// console.log(arr1.every2(x => x > 0)); 

// const s = [1, , 3, 4];
// console.log("every:");
// console.log(s.every(x => x < 5));  
// console.log("every2:");
// console.log(s.every2(x => x < 5)); 

// const arr2 = [2, 5, 8, 1, 4];
// console.log("every:");
// console.log(arr2.every(x => x > 3)); 
// console.log("every2:");
// console.log(arr2.every2(x => x > 3)); 


// slice
const arr = ['Banana' , 'Yellow' , 'Colors' , 'Item' , 'Chat GPT'] ;

//slice
Array.prototype.slice2 = function (start, end) {
  const length = this.length;
  const newArr = [];
  start = start || 0;
  end = end || length;

  if (start < 0) {
    start += length;
  }
  if (end < 0) {
    end += length;
  }


  for (let i = start; i < end && i < length; i++) {
    if(i in this) {
       newArr.push(this[i]) ; 
    }
    else {
      newArr.length++ ; 
    }
  }
  return newArr;
};  

// const arrss = ['Banana', , 'Colors', 'Item', 'Chat GPT'];


// console.log("slice:");
// console.log(arrss.slice(1, 3));
// console.log("slice2:");
// console.log(arrss.slice2(1, 3));


// console.log("slice:");
// console.log(arrss.slice(-3)); 
// console.log("slice2:");
// console.log(arrss.slice2(-3)); 


// console.log("slice:");
// console.log(arrss.slice(2, 100)); 
// console.log("slice2:");
// console.log(arrss.slice2(2, 100)); 



//includes 
Array.prototype.includes2 = function (value, idx = 0) {
  const length = this.length;
  if (length === 0) return false;

  if (idx < 0) {
    idx += length; //bé hơn length thì sẽ cộng length để lấy index từ cuối mảng
    if (idx < 0) idx = 0; //vẫn bé hơn thì = 0
  }

  for (let i = idx; i < length; i++) {
    if (this[i] === value || (this[i] !== this[i] && value !== value)) {
      return true;
    }
  }
  return false;
};

const arrssstr = ['Banana', , 'Colors', 'Item', NaN];

console.log("include");
console.log(arrssstr.includes('Item', -2));
console.log("includes2");
console.log(arrssstr.includes2('Item', -2));


console.log("includes");
console.log(arrssstr.includes(NaN));
console.log("includes2");
console.log(arrssstr.includes2(NaN));


console.log("includes");
console.log(arrssstr.includes('Banana', -10));
console.log("includes2");
console.log(arrssstr.includes2('Banana', -10));


//indexOf
Array.prototype.indexOf2 = function (value, idx = 0) {
  const length = this.length;
  if (length === 0) return -1;

  if (idx < 0) {
    idx += length; //bé hơn length thì sẽ cộng length để lấy index từ cuối mảng
    if (idx < 0) idx = 0; //vẫn bé hơn thì = 0
  }

  for (let i = idx; i < length; i++) {
    if (this[i] === value && i in this) {
      return i;
    }
  }
  return -1;
};

// const arrsstsrs = ['Banana', , 'Colors', 'Item', NaN];

// console.log("indexOf");
// console.log(arrsstsrs.indexOf('Item', -2));
// console.log("indexOf2:");
// console.log(arrsstsrs.indexOf2('Item', -2));

// console.log("indexOf");
// console.log(arrsstsrs.indexOf('Banana', -10));
// console.log("indexOf2:");
// console.log(arrsstsrs.indexOf2('Banana', -10));

// console.log("indexOf");
// console.log(arrsstsrs.indexOf(NaN));
// console.log("indexOf2:");
// console.log(arrsstsrs.indexOf2(NaN));

// console.log("indexOf)");
// console.log(arrsstsrs.indexOf(undefined));
// console.log("indexOf2:");
// console.log(arrsstsrs.indexOf2(undefined));



// lastIndexOf
Array.prototype.lastIndexOf2 = function (value, idx = this.length - 1) {
  const length = this.length;
  if (length === 0) return -1;

  if (idx < 0) {
    idx += length; //bé hơn length thì sẽ cộng length để lấy index từ cuối mảng
    if (idx < 0) idx = 0; //vẫn bé hơn thì = 0
  }

  for (let i = idx; i >= 0; i--) {
    if (this[i] === value && i in this) {
      return i;
    }
  }
  return -1;
};

// let ts = ['a', 'b', 'a', 'c', 'a', NaN , , 'd'];

// console.log("lastIndexOf:");
// console.log(ts.lastIndexOf('a')); 
// console.log("lastIndexOf2:");
// console.log(ts.lastIndexOf2('a')); 


// console.log("lastIndexOf:");
// console.log(ts.lastIndexOf(NaN, 0));  
// console.log("lastIndexOf2:");
// console.log(ts.lastIndexOf2(NaN, 0));  


// console.log("lastIndexOf:");
// console.log(ts.lastIndexOf(undefined, 0));  
// console.log("lastIndexOf2:");
// console.log(ts.lastIndexOf2(undefined, 0));  

// concat
Array.prototype.concat2 = function (...arrs) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      newArr.push(this[i]);
    }else newArr.length++;
  }

  for (const item of arrs) {
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        if(j in item) {
          newArr.push(item[j]);
        }
        else newArr.length++;
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};


// const arr1 = ['A', 'B'];
// const arr2 = ['C', 'D'];
// const arr3 = ['E'];
// const val = 'F';

// console.log("concat:");
// console.log(arr1.concat(arr2, arr3, val));

// console.log("concat2:");
// console.log(arr1.concat2(arr2, arr3, val));


// const arr1 = ['X', , 'Y']; 
// const arr2 = ['Z'];

// console.log("concat:");
// console.log(arr1.concat(arr2));

// console.log("concat2:");
// console.log(arr1.concat2(arr2));


const arr1 = [1, 2];
const obj = { name: 'Hy' };

console.log("concat:");
console.log(arr1.concat(obj));

console.log("concat2:");
console.log(arr1.concat2(obj));


//splice 
Array.prototype.splice2 = function (start, deleteCount, ...items) {
  if(start < 0) {
    start += this.length; 
    if(start < 0) start = 0; 
  }
  if(deleteCount < 0) {
    deleteCount = 0; 
  }
  const removedItems = [];

  for(let i = start ; i < start + deleteCount ; i++) {
      if(i in this) {
        removedItems.push(this[i]) ;
      } else removedItems.length++ ; 
  }
  
  const arr = [] ; 
  for(let i = 0 ; i < start; i++) {
    if(i in this) {
      arr.push(this[i]) ;
    } else arr.length++ ; 
  } //Chèn ở trước start

  
  for(let i = 0 ; i < items.length ; i++) {
    arr.push(items[i]) ; //chèn items mới vào
  } 

  for(let i = start + deleteCount ; i < this.length ; i++) {
    if(i in this) {
      arr.push(this[i]) ;
    } else arr.length++ ; 
  } //tính từ start + deleteCount đến hết mảng

  for (let i = 0; i < arr.length; i++) {
    if(i in this) {
      this[i] = arr[i]; 
    } else {
      this.length++ ;
    };
  }

  this.length = arr.length;

  return removedItems ;
}

// let arr1 = [1, 2, 3, 4, 5, 6];  
// let arr2 = [1, 2, 3, 4, 5, 6];

// let delete1 = arr1.splice2(1, 3, 'a', 'b');
// let delete2 = arr2.splice(1, 3, 'a', 'b');

// console.log("splice2:", arr1);    
// console.log("delete1:", delete1);      

// console.log("splice:", arr2);    
// console.log("delete2:", delete2);      


// let arr1 = [1, 2, 3, 4, 5, ];  
// let arr2 = [1, 2, 3, 4, 5, ];

// let delete1 = arr1.splice2(1, 3, 'a', 'b');
// let delete2 = arr2.splice(1, 3, 'a', 'b');

// console.log("splice2:", arr1);    
// console.log("delete1:", delete1);      

// console.log("splice:", arr2);    
// console.log("delete2:", delete2);      

// let arr1 = [1, 2, 3, 4, , 5]; 
// let arr2 = [1, 2, 3, 4, , 5];

// let delete1 = arr1.splice2(1, 2, 'a', 'b');
// let delete2 = arr2.splice(1, 2, 'a', 'b');

// console.log("splice2:", arr1);         
// console.log("delete:", delete1);           

// console.log("splice:", arr2);          
// console.log("delete:", delete2);     