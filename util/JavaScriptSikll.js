// 1.有条件地向对象添加属性
const condition = true
const person = {
    id: 1,
    name: 'admin',
    ...(condition && { age: 20 })
}
// 2.检查属性是否存在对象中
console.log('name' in person)

// 对象中的动态属性名称
const dynamic = 'static'
const item = {
    name: '前端小智',
    [dynamic]: '工程师'
};
console.log(item[dynamic])
//4. 使用动态键进行对象解构
const templates = {
    'hello': 'hello words',
    'bye': 'bye words',
}
const  templateName = 'bye'
const { [templateName]: template } = templates
console.log(template)
// 空值合并 ?? 操作符
const foo = null ?? 'hello'
console.log(foo)

const bar = 'Not null' ?? 'hello'
console.log(bar)

const baz = 0 ?? 'hello'
console.log(baz)

//可选链 ?.
const book = { id:1, title: 'Title', author: null };
console.log(book?.author?.name)

const myArray = [null, false, 'Hello', undefined, 0];

// 过滤虚值
const filtered = myArray.filter(val => Boolean(val));
console.log(filtered); // ['Hello']

// 检查至少一个值是否为真
const anyTruthy = myArray.some(Boolean);
console.log(anyTruthy); // true

// 检查所有的值是否为真
const allTruthy = myArray.every(Boolean);
console.log(allTruthy); // false

// 10. 扁平化数组
const myArray2 = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]];
const flattedArray = myArray2.flat(Infinity);  // Infinity 展开全部

//11.Object.entries
const person2 = {
    name: '前端小智',
    age: 20
};
Object.keys(person2)
Object.keys(person).forEach((key) => {
    console.log(`${key} is ${person[key]}`);
});

Object.entries(person2)
// 使用 entries 获取键和值
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
});

// 12.replaceAll 方法
const str = 'Red-Green-Blue';
// 只规制第一次出现的
str.replace('-', ' '); // Red Green-Blue
// 使用 RegEx 替换所有匹配项
str.replace(/\-/g, ' '); // Red Green Blue
// 在 ES12 中，一个名为 replaceAll 的新方法被添加到 String.prototype 中,它用另一个字符串值替换所有出现的字符串。
str.replaceAll('-', ' '); // Red Green Blue

//13.数字分隔符
const readableBillion = 1000_000_000;
// 14.document.designMode
document.designMode = 'on';
// 15.逻辑赋值运算符  逻辑赋值运算符是由逻辑运算符&&、||、??和赋值运算符=组合而成。  ??操作符只检查 null 或 undefined 的值。

