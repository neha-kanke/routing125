import { Iproduct, prodstatus } from "../model/products";





export let Allrpodcutsarr:Array<Iproduct>=[
    {
        pName: 'Samsung M31',
        pId: '1',
        pStatus: prodstatus.Dispathched,
        canReturn : 1
        
      },
      {
        pName: 'Samsung TV LED',
        pId: '2',
        pStatus:prodstatus.InProgress,
        canReturn : 1
  
      },
      {
        pName: 'Iphone 14',
        pId: '3',
        pStatus: prodstatus.Dispathched,
        
        canReturn : 0,
       
      },
      {
        pName: 'Sony Headphone',
        pId: '4',
        pStatus: prodstatus.Delivered,
        canReturn : 0
      }
]