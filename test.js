import test from 'ava';
import nv from './index'

test('isName', t => {
	t.is(nv.isName('2'), false);
	t.is(nv.isName('我'), false);
	t.is(nv.isName('你好'), true);
	t.is(nv.isName('马克·突击队'), true);
});


test('isEmail', t => {
	t.is(nv.isEmail('12d3d3de3e3'), false);
	t.is(nv.isEmail('第几'), false);
	t.is(nv.isEmail('你好@时尚.都是'), false);  // 不支持中文域名判断
	t.is(nv.isEmail('test@时尚.都是'), false);  // 不支持中文域名判断
	t.is(nv.isEmail('你好@qq.com'), false); 
	t.is(nv.isEmail('qq@qq.cc'), true);
	t.is(nv.isEmail('sdsdds@dsd.dsd.dsd.qq.cc'), true);
});


test('isIdCard', t => {
	t.is(nv.isIdCard('110101199003076253'), true);
	t.is(nv.isIdCard('110101199003075357'), true);
	t.is(nv.isIdCard('430102199003079818'), true);
	t.is(nv.isIdCard('510104199003071878'), true);
	t.is(nv.isIdCard('620102199003076479'), true);
	t.is(nv.isIdCard('620102199003434340'), false);
	t.is(nv.isIdCard('62010219900'), false);
	t.is(nv.isIdCard('62010219900307647943434'), false);
	t.is(nv.isIdCard('620102199003076设计师'), false);

});

test('isPhone', t => {
	t.is(nv.isPhone('17161535444'), true);
	t.is(nv.isPhone('17161588899'), true);
});

test('isCard', t => {
	t.is(nv.isCard('6222600260001072444'), true);
	t.is(nv.isCard('6228482410842133810'), true);
	t.is(nv.isCard('6228481101100634315'), true);
	t.is(nv.isCard('6216665000001788266'), true);
	t.is(nv.isCard('6228482410842133812330'), false);
	t.is(nv.isCard('6228482410'), false);
	t.is(nv.isCard('6228482410dddd33810'), false);
	t.is(nv.isCard('6228482410大家333810'), false);
});

test('isLength', t => {
	t.is(nv.isLength('123456', { min: 5, max: 9}), true);
	t.is(nv.isLength('123456', { min: 5 }), true);
});


test('isNumber', t => {
	t.is(nv.isNumber(123, { min: 22, max: 229}), true);
});
