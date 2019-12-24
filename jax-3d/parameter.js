let

    idx,
    timer,

    // 存放li 元素
    liElem,

    // 存放span 元素
    spanElem,

    // 记录布局类型
    currentStyle,

    // 鼠标X、Y坐标值
    oldCoordX,
    oldCoordY,
    nowCoordX,
    nowCoordY,

    // li 元素水平、垂直、纵深方向偏移位
    offsetStepX,
    offsetStepY,
    offsetStepZ,

    // li 元素的坐标
    liElemCoordX,
    liElemCoordY,
    liElemCoordZ,

    // 鼠标X、Y差值
    minusX = 0,
    minusY = 0,

    // X、Y偏移度数
    liElemDegX = 0,
    liElemDegY = 0,

    // li 元素的最大个数
    liElemMaxNum = 25,

    // li 元素 水平、垂直铺放的最大个数
    liElemRowMaxNum = 4,
    liElemColMaxNum = 4,

    // li 元素水平、垂直、纵深方向的最大间隔距离
    liElemOffsetX = 350,
    liElemOffsetY = 350,
    liElemOffsetZ = 350,

    // li 元素默认景深
    liElemDepDefault = -1000,

    // 避免覆盖默认景深值
    depDefault = liElemDepDefault-600;

    // 避免第一次拖动发生错位
    liElemDepZ = liElemDepDefault-600,

    // 单个方阵中 li 元素的总个数
    aScreenNum = liElemRowMaxNum*liElemColMaxNum,

    // li 元素纵深方向的最在间隔距离
    liElemDepMaxDist = parseInt(liElemMaxNum/aScreenNum),

    // 计算第一个li 元素的坐标点
    liElemFristSiteX = parseInt('-'+liElemRowMaxNum/2)*liElemOffsetX,
    liElemFristSiteY = parseInt('-'+liElemColMaxNum/2)*liElemOffsetY,
    liElemFristSiteZ = parseInt('-'+liElemDepMaxDist/2)*liElemOffsetZ;
