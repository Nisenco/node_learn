stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。

流也是一个对象，我们只需要响应流的事件就可以了：data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。

要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。