import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'NTG-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {



  output!: string;

onKeyUp(result: string) {

this.output=result ;
}
btnClicked() {
console.log("btn clicked");
}
divClicked() {
  console.log("div clicked");
}
  
   out ="Thankyou" ;

   isActive =false ;


//pipes
   employees = {
fullName :"mohamed aborya" ,
birthdate : "12-9-1993",
salary : "5000" ,
desc :"mohamed esmail abourya"
}

//@Input and @output property

@Input('childData') childData! :string ;

@Input('child') child :any;

@Output() notify: EventEmitter<string>=new EventEmitter<string>();
// childData = 'child data' ;

notifyParent(){
  this.notify.emit('Data from child')
}


//Built in directives 
// 1- component  with view      2- structure       3- attribute
 
//  structure  (*ngFor)
students:string[]=['ahmed','mohamed','osman'];

//  structure  (*ngFor Group)

NtgBranches: any[]=[
  {country :'Egypt',
    branches :[{branchName : 'Elharam',
              phone :'0102222223221',
              address :{str:'ezzEldeenOmar', buildNum :'9',flat :'1'}
              },
              {branchName : 'ELmaadi',
              phone :'0104444443221',
              address :{str:'carfour', buildNum :'8',flat :'2'}
              },{branchName : 'ELagouza',
              phone :'0106666663221',
              address :{str:'Nile st', buildNum :'10',flat :'3'}
              }
             ]

  },
  {country :'Canda',
  branches :[{branchName : 'ElharamCanda',
            phone :'01022222232Canda',
            address :{str:'ezzEldeenOmarCanda', buildNum :'9Canda',flat :'1Canda'}
            },
            {branchName : 'ELmaadiCanda',
            phone :'0104444443Canda',
            address :{str:'carfourCanda', buildNum :'8Canda',flat :'2Canda'}
            },{branchName : 'ELagouzaCanda',
            phone :'01066666Canda',
            address :{str:'Nile st Canda', buildNum :'10Canda',flat :'3Canda'}
            }
           ]

},{country :'Oman',
branches :[{branchName : 'ElharamOman',
          phone :'010222222Oman',
          address :{str:'ezzEldeenOmarOman', buildNum :'9Oman',flat :'1Oman'}
          },
          {branchName : 'ELmaadiOman',
          phone :'01044444Oman',
          address :{str:'carfourOman', buildNum :'8Oman',flat :'2Oman'}
          },{branchName : 'ELagouzaOman',
          phone :'010666666Oman',
          address :{str:'Nile stOman', buildNum :'10Oman',flat :'3Oman'}
          }
         ]

}
]

/////////////////////////////// *ngIF and Ng-template
courses:string[]=[]

// ;trackBy:trackByCourse
courseList:any[]=[{'id' :1 ,'courseName' :'java'},
                  {'id' :2 ,'courseName' :'.net'},
                  {'id' :3 ,'courseName' :'paython'},
                  {'id' :4 ,'courseName' :'lang'}
                     ]

trackByCourse(index: any ,course:any):any{
return course?course.id: undefined ;
}

addcourse() {
   this.courses.push('Angular')
}

removeCourse(course: string) {
  let index =this.courses.indexOf(course);
 this.courses.splice(index,1);
  }
}
