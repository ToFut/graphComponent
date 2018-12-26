export interface IGraphValue {
  value: number;
  xText: string;
  yText: string;
  badge: any;
  dataContext?: { RTCorrectAvg: number, LongestStrack: number };
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
  dataContext: {RTCorrectAvg: 0.6, LongestStrack: 3},
},
  {
    value: 123,
    xText: 'אתמול',
    yText: '1750',
    badge: 'circle',
    dataContext: {RTCorrectAvg: 0.67, LongestStrack: 1232},

  },
  {
    value: 1375,
    xText: '26/09/2016',
    yText: '1750',
    badge: 'circle',
    dataContext: {RTCorrectAvg: 0.143, LongestStrack: 164},

  },
  {
    value: 941,
    xText: '24/09/2018',
    yText: '1750',
    badge: 'circle',
    dataContext: {RTCorrectAvg: 0.343, LongestStrack: 22},

  },
  {
    value: 941,
    xText: '21/09/2018',
    yText: '1750',
    badge: 'circle',
    dataContext: {RTCorrectAvg: 0.21, LongestStrack: 12},

  }]
