// prettierrc.js
module.exports = {
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  printWidth: 100, // 超过最大值换行
  semi: false, // 在每个语句的末尾添加分号
  singleQuote: true, // 使用单引号而不是双引号
  trailingComma: 'es5', // 多行时尽可能打印尾随逗号<none|es5|all>
  bracketSpacing: true, // 对象文字中打印括号之间的空格
  endOfLine: 'auto', // 对象文字中打印括号之间的空格
  arrowParens: 'avoid', // 在单个箭头函数参数周围加上括号<avoid|always>
  jsxBracketSameLine: true,
  htmlWhitespaceSensitivity: 'css', // 指定HTML文件的全局空格敏感度 <css|strict|ignore>
  // 使用 2 个空格缩进
  tabSize: 2,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 换行符使用 lf 结尾是 \n \r \n\r auto
  endOfLine: 'lf',
}