export interface IGraphValue {
  value: number;
  xText: string;
  yText: string;
  badge: any;
  dataContext?: string;
}

export interface IData {
  y: number;
  marker: { symbol: string };
  name?: string;

}

export const json = [{
  value: 1750,
  xText: 'היום',
  yText: '1750',
  badge: 'url(../assets/crown.png)',
  dataContext: '1',
},
  {
    value: 123,
    xText: 'אתמול',
    yText: '1750',
    badge: 'circle',
    dataContext: '2',

  },
  {
    value: 1375,
    xText: '26/09/2016',
    yText: '1750',
    badge: 'circle',
    dataContext: '3',

  },
  {
    value: 941,
    xText: '24/09/2018',
    yText: '1750',
    badge: 'circle',
    dataContext: '4',

  },
  {
    value: 941,
    xText: '21/09/2018',
    yText: '1750',
    badge: 'circle',
    dataContext:  '5',

  }]
