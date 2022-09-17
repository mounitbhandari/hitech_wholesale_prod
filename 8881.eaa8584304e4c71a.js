"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[8881],{8881:(Xt,N,a)=>{a.r(N),a.d(N,{StudentModule:()=>Ht});var p=a(6895),h=a(2761),m=a(805),i=a(4006),D=a(2340);function k(n){return s=>{let e=s.value;var o=0;if(e){const r=Math.abs(Date.now()-e.getTime());if((o=Math.floor(r/864e5/365.25))<=n)return{ageGTE:!0,requiredValue:n,currentAge:o}}return isNaN(e)?{ageGTE:!0,requiredValue:n,currentAge:o}:null}}var Y=a(8675),B=a(4004),t=a(4650),O=a(9366),L=a(4339),x=a(6304),E=a(5620),g=a(9549),C=a(4144),T=a(4859),A=a(2137),G=a(5593),f=a(2336),S=a(1493),F=a(3608),I=a(2453),c=a(6257),q=a(8796),_=a(9602),w=a(5362),U=a(1167),M=a(5121),V=a(9236),y=a(3214),J=a(2124),v=a(7957),Q=a(3238);function P(n,s){1&n&&(t.TgZ(0,"mat-error",95),t._uU(1,"Student Name is required"),t.qZA())}function j(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,P,2,0,"mat-error",94),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.studentNameFormGroup.controls.studentName.errors.required)}}function R(n,s){1&n&&(t.TgZ(0,"div",14)(1,"mat-form-field",15),t._UZ(2,"input",96),t.qZA()())}function H(n,s){1&n&&(t.TgZ(0,"div",14)(1,"mat-form-field",15),t._UZ(2,"input",97),t.qZA()())}function z(n,s){1&n&&(t.TgZ(0,"mat-error",95),t._uU(1,"DOB is required"),t.qZA())}function K(n,s){if(1&n&&(t.TgZ(0,"mat-error",95),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" Age is ",e.studentBasicFormGroup.controls.dob.errors.currentAge," ")}}function $(n,s){if(1&n&&(t.TgZ(0,"mat-error",95),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" Age should be more than ",e.studentBasicFormGroup.controls.dob.errors.requiredValue," ")}}function W(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,z,2,0,"mat-error",94),t.YNc(2,K,2,1,"mat-error",94),t.YNc(3,$,2,1,"mat-error",94),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.studentBasicFormGroup.controls.dob.errors.required),t.xp6(1),t.Q6J("ngIf",e.studentBasicFormGroup.controls.dob.errors.ageGTE),t.xp6(1),t.Q6J("ngIf",e.studentBasicFormGroup.controls.dob.errors.ageGTE)}}function X(n,s){if(1&n&&(t.TgZ(0,"mat-option",98),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function tt(n,s){if(1&n&&(t.TgZ(0,"span",99),t._uU(1),t._UZ(2,"i"),t.qZA()),2&n){const e=s.$implicit;t.Q6J("pTooltip",e.tooltip),t.xp6(1),t.hij("",e.name," "),t.xp6(1),t.Tol(e.icon)}}function et(n,s){if(1&n&&(t.TgZ(0,"div",100),t._UZ(1,"img",101),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",e.webcamImage.imageAsDataUrl,t.LSH)}}function nt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",102),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.saveUserImage())}),t.TgZ(1,"i",103),t._uU(2,"\xa0Save"),t.qZA()()}}function ot(n,s){1&n&&(t.TgZ(0,"span",104),t._UZ(1,"button",105)(2,"button",106)(3,"button",107),t.qZA())}function it(n,s){1&n&&t._uU(0,"Done")}function st(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",108),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.saveStudent())}),t.TgZ(1,"i",109),t._uU(2," Save "),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("disabled",!e.isValidForm())}}function at(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",108),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.updateStudent())}),t.TgZ(1,"i",109),t._uU(2," Update "),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("disabled",!e.isValidForm())}}function rt(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function ut(n,s){if(1&n&&(t.TgZ(0,"ngb-alert",112)(1,"ul"),t.YNc(2,rt,2,1,"li",113),t.qZA()()),2&n){const e=t.oxw(2);t.Q6J("dismissible",!1),t.xp6(2),t.Q6J("ngForOf",e.errorMessage.studentName)}}function dt(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function lt(n,s){if(1&n&&(t.TgZ(0,"ngb-alert",112)(1,"ul"),t.YNc(2,dt,2,1,"li",113),t.qZA()()),2&n){const e=t.oxw(2);t.Q6J("dismissible",!1),t.xp6(2),t.Q6J("ngForOf",e.errorMessage.dob)}}function pt(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function mt(n,s){if(1&n&&(t.TgZ(0,"ngb-alert",112)(1,"ul"),t.YNc(2,pt,2,1,"li",113),t.qZA()()),2&n){const e=t.oxw(2);t.Q6J("dismissible",!1),t.xp6(2),t.Q6J("ngForOf",e.errorMessage.guardianName)}}function ct(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function ht(n,s){if(1&n&&(t.TgZ(0,"ngb-alert",112)(1,"ul"),t.YNc(2,ct,2,1,"li",113),t.qZA()()),2&n){const e=t.oxw(2);t.Q6J("dismissible",!1),t.xp6(2),t.Q6J("ngForOf",e.errorMessage.fatherName)}}function gt(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function ft(n,s){if(1&n&&(t.TgZ(0,"ngb-alert",112)(1,"ul"),t.YNc(2,gt,2,1,"li",113),t.qZA()()),2&n){const e=t.oxw(2);t.Q6J("dismissible",!1),t.xp6(2),t.Q6J("ngForOf",e.errorMessage.motherName)}}function _t(n,s){if(1&n&&(t.TgZ(0,"li"),t._UZ(1,"i",114),t._uU(2),t.qZA()),2&n){const e=s.$implicit;t.xp6(2),t.hij(" ",e,"")}}function bt(n,s){if(1&n&&(t.TgZ(0,"ngb-alert",112)(1,"ul"),t.YNc(2,_t,3,1,"li",113),t.qZA()()),2&n){const e=t.oxw(2);t.Q6J("dismissible",!1),t.xp6(2),t.Q6J("ngForOf",e.errorMessage.email)}}function vt(n,s){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Oqu(e)}}function Zt(n,s){if(1&n&&(t.TgZ(0,"ngb-alert",112)(1,"ul"),t.YNc(2,vt,2,1,"li",113),t.qZA()()),2&n){const e=t.oxw(2);t.Q6J("dismissible",!1),t.xp6(2),t.Q6J("ngForOf",e.errorMessage.sex)}}function Nt(n,s){if(1&n&&(t.TgZ(0,"div",110),t.YNc(1,ut,3,2,"ngb-alert",111),t.YNc(2,lt,3,2,"ngb-alert",111),t.YNc(3,mt,3,2,"ngb-alert",111),t.YNc(4,ht,3,2,"ngb-alert",111),t.YNc(5,ft,3,2,"ngb-alert",111),t.YNc(6,bt,3,2,"ngb-alert",111),t.YNc(7,Zt,3,2,"ngb-alert",111),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.errorMessage.studentName),t.xp6(1),t.Q6J("ngIf",e.errorMessage.dob),t.xp6(1),t.Q6J("ngIf",e.errorMessage.guardianName),t.xp6(1),t.Q6J("ngIf",e.errorMessage.fatherName),t.xp6(1),t.Q6J("ngIf",e.errorMessage.motherName),t.xp6(1),t.Q6J("ngIf",e.errorMessage.email),t.xp6(1),t.Q6J("ngIf",e.errorMessage.sex)}}function xt(n,s){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Header Content"),t.qZA())}function Ct(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",115),t.NdJ("click",function(){t.CHM(e),t.oxw();const r=t.MAs(182);return t.KtG(r.reject())}),t.qZA(),t.TgZ(1,"button",116),t.NdJ("click",function(){t.CHM(e),t.oxw();const r=t.MAs(182);return t.KtG(r.accept())}),t.qZA()}}function Tt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",117)(1,"div",118)(2,"button",119),t._UZ(3,"i",120),t.qZA(),t.TgZ(4,"input",121),t.NdJ("input",function(r){t.CHM(e);const u=t.oxw(),d=t.MAs(198);return t.KtG(d.filterGlobal(u.getEventValue(r),"contains"))}),t.qZA()()()}}function At(n,s){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"ID"),t.qZA(),t.TgZ(3,"th",122),t._uU(4,"Ep. ID "),t._UZ(5,"p-sortIcon",123),t.qZA(),t.TgZ(6,"th",124),t._uU(7,"Name "),t._UZ(8,"p-sortIcon",125),t.qZA(),t.TgZ(9,"th",126),t._uU(10,"Mother "),t._UZ(11,"p-sortIcon",127),t.qZA(),t.TgZ(12,"th",128),t._uU(13,"Edit "),t._UZ(14,"p-sortIcon",129),t.qZA(),t.TgZ(15,"th",130),t._uU(16,"Delete "),t._UZ(17,"p-sortIcon",131),t.qZA()())}function Gt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"p-button",132),t.NdJ("click",function(){const u=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.editStudent(u))}),t.qZA()(),t.TgZ(11,"td")(12,"p-button",133),t.NdJ("click",function(){const u=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.deleteStudent(u))}),t.qZA()()()}if(2&n){const e=s.$implicit;t.xp6(2),t.Oqu(e.studentId),t.xp6(2),t.Oqu(e.episodeId),t.xp6(2),t.Oqu(e.studentName),t.xp6(2),t.Oqu(e.motherName)}}function St(n,s){1&n&&t._UZ(0,"p-button",134)}const Ft=function(){return{width:"30em"}};function It(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",135)(1,"p-toggleButton",136),t.NdJ("ngModelChange",function(r){t.CHM(e);const u=t.oxw();return t.KtG(u.showDeveloperDiv=r)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Akn(t.DdM(3,Ft)),t.Q6J("ngModel",e.showDeveloperDiv)}}function qt(n,s){if(1&n&&(t.TgZ(0,"div")(1,"pre"),t._uU(2),t.ALo(3,"json"),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.hij("        test=",t.lcZ(3,1,e.studentNameFormGroup.controls.studentName.errors),"\n      ")}}function wt(n,s){if(1&n&&(t.TgZ(0,"div",23)(1,"div",137)(2,"pre"),t._uU(3),t.ALo(4,"json"),t.ALo(5,"json"),t._uU(6,"\n    "),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"pre"),t._uU(9,"\n    "),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"pre"),t._uU(12),t.qZA(),t._UZ(13,"hr"),t.YNc(14,qt,4,3,"div",17),t.qZA(),t.TgZ(15,"div",138)(16,"pre"),t._uU(17),t.ALo(18,"json"),t.qZA(),t.TgZ(19,"pre"),t._uU(20),t.ALo(21,"json"),t.qZA()(),t.TgZ(22,"div",139)(23,"pre"),t._uU(24),t.ALo(25,"json"),t.qZA()(),t.TgZ(26,"div",140)(27,"pre"),t._uU(28),t.ALo(29,"json"),t.qZA()(),t.TgZ(30,"div",140)(31,"pre"),t._uU(32),t.ALo(33,"json"),t.qZA()(),t.TgZ(34,"div",140)(35,"pre"),t._uU(36),t.ALo(37,"json"),t.qZA()()()),2&n){const e=t.oxw();t.xp6(3),t.AsE("      studentNameFormGroup = ",t.lcZ(4,14,e.studentNameFormGroup.value),"\n      studentData=",t.lcZ(5,16,e.studentData),"\n\n"),t.xp6(9),t.xDo("      this.studentNameFormGroup.valid = ",e.studentNameFormGroup.valid,"\n      this.studentGuardianFormGroup.valid =",e.studentGuardianFormGroup.valid,"\n      this.studentBasicFormGroup.valid =",e.studentBasicFormGroup.valid,"\n      this.studentAddressFormGroup.valid =",e.studentAddressFormGroup.valid,"\n      this.studentContactFormGroup.valid=",e.studentContactFormGroup.valid,"\n    "),t.xp6(2),t.Q6J("ngIf",e.studentNameFormGroup.controls.studentName.errors&&e.studentNameFormGroup.controls.studentName.errors.required),t.xp6(3),t.hij("      students=",t.lcZ(18,18,e.students),"\n    "),t.xp6(3),t.hij("      studentGuardianFormGroup = ",t.lcZ(21,20,e.studentGuardianFormGroup.value),";\n    "),t.xp6(4),t.hij("      studentBasicFormGroup = ",t.lcZ(25,22,e.studentBasicFormGroup.value),"\n    "),t.xp6(4),t.hij("      studentAddressFormGroup = ",t.lcZ(29,24,e.studentAddressFormGroup.value),"\n    "),t.xp6(4),t.hij("      studentContactFormGroup = ",t.lcZ(33,26,e.studentContactFormGroup.value),"\n    "),t.xp6(4),t.hij("      Error Message = ",t.lcZ(37,28,e.errorMessage),"\n    ")}}const Ut=function(){return{width:"50vw"}},Mt=function(){return{"960px":"75vw","640px":"100vw"}},yt=function(){return{height:"120px"}},Jt=function(){return{width:"30vw"}},Qt=function(){return[5,10,25,50]},Dt=function(){return["studentId","episodeId","studentName","motherName"]},kt=[{path:"",component:(()=>{class n{constructor(e,o,r,u,d,Z,b,zt,Kt,$t){this.route=e,this.authService=o,this.messageService=r,this.activatedRoute=u,this.studentService=d,this.confirmationService=Z,this.primengConfig=b,this.storage=zt,this.commonService=Kt,this.datepipe=$t,this.myControl=new i.p4,this.qualifications=["Graduate","Class V","Class VI","Class VII","Class VIII"],this.students=[],this.msgs=[],this.displayDialog=!1,this.items=[],this.activeIndex=0,this.isLinear=!1,this.alerts=[],this.billingName="",this.guradainName="",this.isProduction=D.N.production,this.showDeveloperDiv=!0,this.isCaptured=!0,this.WIDTH=200,this.HEIGHT=200,this.dialogContent="",this.optionSelected="",this.stateSelected="",this.guardianName="",this.studentData={},this.stateList=[],this.visibleSidebar2=!1,this.showErrorMessage=!1,this.isShown=!1,this.hiddenInput=!1,this.storage.get("studentNameFormGroup").subscribe(l=>{l&&this.studentNameFormGroup.setValue(l)},l=>{}),this.storage.get("studentGuardianFormGroup").subscribe(l=>{l&&this.studentGuardianFormGroup.setValue(l)},l=>{}),this.storage.get("studentBasicFormGroup").subscribe(l=>{l&&this.studentBasicFormGroup.setValue(l)},l=>{}),this.studentService.fetchEducations().then(l=>{this.qualifications=l}),this.loginType=this.activatedRoute.snapshot.data.loginType,this.route.data.subscribe(l=>{this.stateList=l.studentResolverData.states.data}),this.genders=[{name:"M",value:"M",icon:"bi bi-gender-male",tooltip:"Male"},{name:"F",value:"F",icon:"bi bi-gender-female",tooltip:"Female"},{name:"T",value:"T",icon:"bi bi-gender-trans",tooltip:"Others"}],this.relations=[{name:"Father"},{name:"Mother"},{name:"Dadu"},{name:"Dida"}],this.sex=[{name:"Male"},{name:"Female"},{name:"Others"}],this.studentNameFormGroup=new i.nJ({studentId:new i.p4(null),episodeId:new i.p4(null),studentName:new i.p4(null,[i.kI.required,i.kI.maxLength(100),i.kI.minLength(4)]),billingName:new i.p4(null,[i.kI.required,i.kI.maxLength(100),i.kI.minLength(4)])}),this.studentGuardianFormGroup=new i.nJ({fatherName:new i.p4(null),motherName:new i.p4(null),guardianName:new i.p4(null),relationToGuardian:new i.p4(null,[i.kI.required])}),this.studentBasicFormGroup=new i.nJ({dob:new i.p4(null,[i.kI.required,k(4)]),dobSQL:new i.p4(null),sex:new i.p4(null,i.kI.required),qualification:new i.p4(null,i.kI.required)}),this.studentAddressFormGroup=new i.nJ({address:new i.p4(null,[i.kI.required,i.kI.maxLength(100),i.kI.minLength(4)]),city:new i.p4(null,[i.kI.required,i.kI.maxLength(20),i.kI.minLength(4)]),district:new i.p4(null,[i.kI.required,i.kI.maxLength(20),i.kI.minLength(4)]),stateId:new i.p4(20),pin:new i.p4(null)}),this.studentContactFormGroup=new i.nJ({guardianContactNumber:new i.p4(null,[i.kI.required,i.kI.maxLength(10),i.kI.minLength(10)]),whatsappNumber:new i.p4(null,[i.kI.required,i.kI.maxLength(10),i.kI.minLength(10)]),email:new i.p4(null,[i.kI.required,i.kI.email]),description:new i.p4(null)})}isValidForm(){return!!(this.studentNameFormGroup.valid&&this.studentGuardianFormGroup.valid&&this.studentBasicFormGroup.valid&&this.studentAddressFormGroup.valid&&this.studentContactFormGroup.valid)}showDialog(){this.dialogContent="Student Picture Saved",this.displayDialog=!0}sameAsBillName(){this.studentNameFormGroup.patchValue({billingName:this.studentNameFormGroup.value.studentName})}guardianAsFather(e){this.guardianName=e,console.log(this.guradainName),this.optionSelected="Father"}guardianAsMother(e){this.guardianName=e,console.log(this.guradainName),this.optionSelected="Mother"}editStudent(e){this.date=new Date;const o=this.datepipe.transform(this.date,"dd-MM-yyyy");console.log("convert date:",o),console.log("Editable data:",e),this.isShown=!0,this.studentNameFormGroup.patchValue({studentId:e.studentId}),this.studentNameFormGroup.patchValue({episodeId:e.episodeId}),this.studentNameFormGroup.patchValue({studentName:e.studentName}),this.studentNameFormGroup.patchValue({billingName:e.billingName}),this.studentGuardianFormGroup.patchValue({fatherName:e.fatherName}),this.studentGuardianFormGroup.patchValue({motherName:e.motherName}),this.studentGuardianFormGroup.patchValue({guardianName:e.guardianName}),this.date=new Date(e.dob),this.studentBasicFormGroup.patchValue({dob:this.date}),this.studentBasicFormGroup.patchValue({sex:e.sex}),this.studentBasicFormGroup.patchValue({qualification:e.qualification}),this.studentAddressFormGroup.patchValue({address:e.address}),this.studentAddressFormGroup.patchValue({city:e.city}),this.studentAddressFormGroup.patchValue({district:e.district}),this.studentAddressFormGroup.patchValue({stateId:e.stateId}),this.studentAddressFormGroup.patchValue({pin:e.pin}),this.studentContactFormGroup.patchValue({guardianContactNumber:e.guardianContactNumber}),this.studentContactFormGroup.patchValue({whatsappNumber:e.whatsappNumber}),this.studentContactFormGroup.patchValue({email:e.email}),this.studentContactFormGroup.patchValue({description:e.description})}ngOnInit(){this.filteredQualifications=this.studentBasicFormGroup.valueChanges.pipe((0,Y.O)(""),(0,B.U)(e=>this._filter(e))),this.students=this.studentService.getStudents(),this.studentService.getStudentUpdateListener().subscribe(e=>{this.students=e}),this.primengConfig.ripple=!0,this.optionSelected="Father",this.stateSelected=20,this.items=[{label:"Personal",command:e=>{this.activeIndex=0,this.messageService.add({severity:"info",summary:"First Step",detail:e.item.label})}},{label:"Seat",command:e=>{this.activeIndex=1,this.messageService.add({severity:"info",summary:"Seat Selection",detail:e.item.label})}},{label:"Payment",command:e=>{this.activeIndex=2,this.messageService.add({severity:"info",summary:"Pay with CC",detail:e.item.label})}},{label:"Confirmation",command:e=>{this.activeIndex=3,this.messageService.add({severity:"info",summary:"Last Step",detail:e.item.label})}}],this.ngOnChanges()}deleteStudent(e){this.confirmationService.confirm({message:"Do you want to Update this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",accept:()=>{this.students.indexOf(e.studentId),this.studentService.deleteStudent(e.studentId).subscribe(r=>{this.showSuccess("Record Deleted successfully");let u=this.students.findIndex(d=>d.studentId===e.studentId);-1!==u&&this.students.splice(u,1)},r=>{this.showErrorMessage=!0,this.errorMessage=r.message,setTimeout(()=>{this.showErrorMessage=!1},2e4),this.showError(r.statusText)})},reject:()=>{this.msgs=[{severity:"info",summary:"Rejected",detail:"You have rejected"}]}})}updateStudent(){this.confirmationService.confirm({message:"Do you want to Update this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",accept:()=>{this.studentData.studentId=this.studentNameFormGroup.value.studentId,this.studentData.episodeId=this.studentNameFormGroup.value.episodeId,this.studentData.studentName=this.studentNameFormGroup.value.studentName,this.studentData.billingName=this.studentNameFormGroup.value.billingName,this.studentData.fatherName=this.studentGuardianFormGroup.value.fatherName,this.studentData.motherName=this.studentGuardianFormGroup.value.motherName,this.studentData.guardianName=this.studentGuardianFormGroup.value.guardianName,this.studentData.relationToGuardian=this.studentGuardianFormGroup.value.relationToGuardian,this.studentData.dob=this.studentBasicFormGroup.value.dobSQL,this.studentData.sex=this.studentBasicFormGroup.value.sex,this.studentData.qualification=this.studentBasicFormGroup.value.qualification,this.studentData.address=this.studentAddressFormGroup.value.address,this.studentData.city=this.studentAddressFormGroup.value.city,this.studentData.district=this.studentAddressFormGroup.value.district,this.studentData.stateId=this.studentAddressFormGroup.value.stateId,this.studentData.pin=this.studentAddressFormGroup.value.pin,this.studentData.guardianContactNumber=this.studentContactFormGroup.value.guardianContactNumber,this.studentData.whatsappNumber=this.studentContactFormGroup.value.whatsappNumber,this.studentData.email=this.studentContactFormGroup.value.email,this.studentService.updateStudent(this.studentData).subscribe(e=>{!0===e.status&&this.showSuccess("Record Updated successfully")},e=>{this.showErrorMessage=!0,this.errorMessage=e.message,setTimeout(()=>{this.showErrorMessage=!1},2e4),this.showError(e.statusText)})},reject:()=>{this.msgs=[{severity:"info",summary:"Rejected",detail:"You have rejected"}]}})}saveStudent(){this.confirmationService.confirm({message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",accept:()=>{this.studentData.studentName=this.studentNameFormGroup.value.studentName,this.studentData.billingName=this.studentNameFormGroup.value.billingName,this.studentData.fatherName=this.studentGuardianFormGroup.value.fatherName,this.studentData.motherName=this.studentGuardianFormGroup.value.motherName,this.studentData.guardianName=this.studentGuardianFormGroup.value.guardianName,this.studentData.relationToGuardian=this.studentGuardianFormGroup.value.relationToGuardian,this.studentData.dob=this.studentBasicFormGroup.value.dobSQL,this.studentData.sex=this.studentBasicFormGroup.value.sex,this.studentData.qualification=this.studentBasicFormGroup.value.qualification,this.studentData.address=this.studentAddressFormGroup.value.address,this.studentData.city=this.studentAddressFormGroup.value.city,this.studentData.district=this.studentAddressFormGroup.value.district,this.studentData.stateId=this.studentAddressFormGroup.value.stateId,this.studentData.pin=this.studentAddressFormGroup.value.pin,this.studentData.guardianContactNumber=this.studentContactFormGroup.value.guardianContactNumber,this.studentData.whatsappNumber=this.studentContactFormGroup.value.whatsappNumber,this.studentData.email=this.studentContactFormGroup.value.email,this.studentService.saveStudent(this.studentData).subscribe(e=>{!0===e.status&&this.showSuccess("Record added successfully")},e=>{this.showErrorMessage=!0,this.errorMessage=e.message,setTimeout(()=>{this.showErrorMessage=!1},2e4),this.showError(e.statusText)})},reject:()=>{this.msgs=[{severity:"info",summary:"Rejected",detail:"You have rejected"}]}})}clearStudent(){this.isShown=!1,this.studentNameFormGroup.reset(),this.studentGuardianFormGroup.reset(),this.studentBasicFormGroup.reset(),this.studentAddressFormGroup.reset(),this.studentContactFormGroup.reset()}getEventValue(e){return e.target.value}setDobSQL(e){this.studentBasicFormGroup.patchValue({dobSQL:this.commonService.getSQLDate(e)})}handleInitError(e){e.mediaStreamError&&"NotAllowedError"===e.mediaStreamError.name&&console.warn("Camera access was not allowed by user!")}handleImage(e){this.webcamImage=e}saveUserImage(){if(this.webcamImage){const e=this.webcamImage.imageAsDataUrl.split(","),r=(e[0].match(/:(.*?);/),atob(e[1]));let u=r.length;const d=new Uint8Array(u);for(;u--;)d[u]=r.charCodeAt(u);const Z=new File([d],"test",{type:"jpeg"});this.authService.uploadStudentImage(Z).subscribe(b=>{console.log(b),!0===b.status&&this.showSuccess("Image saved")})}}showSuccess(e){this.messageService.add({severity:"success",summary:"Success",detail:e})}showError(e){this.messageService.add({severity:"error",summary:"Success",detail:e})}_filter(e){const o=e.toLowerCase();return this.qualifications.filter(r=>r.toLowerCase().includes(o))}ngOnChanges(){this.studentNameFormGroup.valueChanges.subscribe(e=>{this.storage.set("studentNameFormGroup",this.studentNameFormGroup.value).subscribe(()=>{})}),this.studentGuardianFormGroup.valueChanges.subscribe(e=>{this.storage.set("studentGuardianFormGroup",this.studentGuardianFormGroup.value).subscribe(()=>{})}),this.studentBasicFormGroup.valueChanges.subscribe(e=>{this.storage.set("studentBasicFormGroup",this.studentBasicFormGroup.value).subscribe(()=>{})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.gz),t.Y36(O.e),t.Y36(m.ez),t.Y36(h.gz),t.Y36(L.V),t.Y36(m.YP),t.Y36(m.b4),t.Y36(x.BU),t.Y36(E.v),t.Y36(p.uU))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-student"]],features:[t._Bn([m.YP,m.ez,p.uU]),t.TTD],decls:210,vars:58,consts:[["header","Title","position","top",3,"transitionOptions","visible","breakpoints","visibleChange"],["position","top-left","key","tl"],["position","top-center","key","tc"],["position","bottom-center","key","bc"],[1,"d-flex","flex-row","bd-highlight","mb-3",2,"height","200vh"],[1,"p-2","bd-highlight"],[1,"card"],[1,"card-header","p-3","mt-2"],[2,"color","#1e293b","font-size","36px"],[1,"card-body"],[2,"min-height","50vh","background-color","grey","background-image","linear-gradient(to right, grey , white)","border-radius","25px 25px","-webkit-box-shadow","0 10px 6px -6px #777","-moz-box-shadow","0 10px 6px -6px #777","box-shadow","0 10px 6px -6px #777",3,"linear"],["stepper",""],["label","Name",3,"stepControl"],[3,"formGroup"],[1,"form-group"],[1,"col-12"],["matInput","","placeholder","Student Name","formControlName","studentName",3,"blur"],[4,"ngIf"],["matInput","","placeholder","Billing Name","formControlName","billingName",3,"value"],["class","form-group",4,"ngIf"],["pButton","","matStepperNext","",1,"p-button-warning",3,"disabled"],[1,"pi","pi-chevron-right",2,"font-size","1rem"],["label","Guardian",3,"stepControl"],[1,"d-flex","flex-row","bd-highlight","mb-3"],[1,"p-2","col-11","bd-highlight"],["matInput","","placeholder","Father Name","formControlName","fatherName"],["fatherName",""],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-info","p-button-rounded","p-button-info",3,"click"],["matInput","","placeholder","Mother Name","formControlName","motherName"],["mother",""],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-rounded","p-button-warning",3,"click"],[1,"p-2","col-8","bd-highlight"],["matInput","","placeholder","Guardian","formControlName","guardianName"],[1,"p-2","col-4","bd-highlight"],["fxFlex","100","bindLabel","name","bindValue","name","appendTo","body","formControlName","relationToGuardian","placeholder","Relation",1,"custom",2,"height","200 !important",3,"items"],[2,"vertical-align","bottom"],["pButton","","matStepperPrevious","",1,"p-button-success"],[1,"pi","pi-chevron-left",2,"font-size","1rem"],["pButton","","matStepperNext","",1,"p-button-warning"],["label","Basic",3,"stepControl"],["matInput","","formControlName","dob",1,"col-9",3,"matDatepicker","dateInput"],["ref",""],["matSuffix","",3,"for"],["dob",""],[1,"example-full-width"],["type","text","placeholder","Select Qualification","aria-label","Qualification","matInput","","formControlName","qualification",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["formControlName","sex","optionLabel","name","optionValue","value",3,"options"],["class","snapshot bd-highlight mb-3","style","height: 200px; width: 200px;",4,"ngIf"],["mat-button","","pButton","",3,"click",4,"ngIf"],[1,"p-2","col-6","bd-highlight"],[3,"pictureTaken"],["label","Address",3,"stepControl"],[2,"width","100%"],["matInput","","formControlName","address","placeholder","Ex. 1 Main St, New York, NY","required",""],["matInput","","formControlName","city","placeholder","Ex. 1 Main St, New York, NY","required",""],[1,"p-2","col-4","bd-highlight",2,"height","40%"],["bindLabel","stateName","bindValue","stateId","formControlName","stateId","autofocus","","appendTo","body","placeholder","State",1,"custom",3,"items"],["matInput","","formControlName","district","placeholder","Ex. 1 Main St, New York, NY","required",""],["matInput","","formControlName","pin","placeholder","700120","required",""],["label","Contact",3,"stepControl"],["matInput","","formControlName","guardianContactNumber","placeholder","Guardian Contact","required",""],["matInput","","formControlName","whatsappNumber","placeholder","WhatsApp Number","required",""],["matInput","email","formControlName","email","placeholder","Enter Your E-Mail","required",""],["formControlName","description"],["pTemplate","header"],["matStepLabel",""],["mat-button","","matStepperPrevious",""],["mat-button","",3,"click"],[1,"bi","bi-arrow-clockwise",2,"font-size","1rem"],["pButton","",3,"disabled","click",4,"ngIf"],["pButton","",3,"click"],[1,"bi","bi-clear",2,"font-size","1rem"],["class","m-5",4,"ngIf"],["header","Confirmation","icon","pi pi-exclamation-triangle",3,"transitionOptions"],["cd",""],["pTemplate","footer"],[1,"card-header"],[1,"d-flex","bd-highlight","mb-3"],["type","button","icon","pi pi-arrow-left",3,"click"],[2,"color","#1e293b"],["dataKey","studentId","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-gridlines",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","paginatorleft"],["position","right",3,"visible","baseZIndex","visibleChange"],[2,"font-weight","normal"],["type","button","label","Save","styleClass","p-button-success",3,"click"],["type","button","label","Cancel","styleClass","p-button-secondary",3,"click"],["fxLayout.xs","column","fxLayout","row","fxLayoutAlign","space-between stretch",4,"ngIf"],["class","d-flex flex-row bd-highlight mb-3",4,"ngIf"],["class","text-right",4,"ngIf"],[1,"text-right"],["matInput","","placeholder","studentId","formControlName","studentId"],["matInput","","placeholder","episodeId","formControlName","episodeId"],[3,"value"],[3,"pTooltip"],[1,"snapshot","bd-highlight","mb-3",2,"height","200px","width","200px"],[1,"img-fluid",3,"src"],["mat-button","","pButton","",3,"click"],[1,"bi","bi-person-bounding-box"],[1,"ql-formats"],["type","button","aria-label","Bold",1,"ql-bold"],["type","button","aria-label","Italic",1,"ql-italic"],["type","button","aria-label","Underline",1,"ql-underline"],["pButton","",3,"disabled","click"],[1,"bi","bi-save",2,"font-size","1rem"],[1,"m-5"],[3,"dismissible",4,"ngIf"],[3,"dismissible"],[4,"ngFor","ngForOf"],[1,"bi","bi-envelope-fill"],["type","button","pButton","","icon","pi pi-times","label","No",3,"click"],["type","button","pButton","","icon","pi pi-check","label","Yes",3,"click"],[1,"col-12","md:col-6"],[1,"p-inputgroup"],["type","button","pButton","","pRipple",""],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Search",3,"input"],["pSortableColumn","episodeId"],["field","episodeId"],["pSortableColumn","studentName"],["field","studentName"],["pSortableColumn","motherName"],["field","motherName"],["pSortableColumn","edit"],["field","edit"],["pSortableColumn","delete"],["field","delete"],["type","button","icon","pi pi-pencil","styleClass","p-button-text",3,"click"],["type","button","icon","pi pi-trash","styleClass","p-button-text",3,"click"],["type","button","icon","pi pi-plus","styleClass","p-button-text"],["fxLayout.xs","column","fxLayout","row","fxLayoutAlign","space-between stretch"],["onLabel","Dont Show Developer Area","offLabel","Show Developer Area","onIcon","pi pi-times","offIcon","pi pi-check",3,"ngModel","ngModelChange"],[1,"p-2","bd-highlight","col-3",2,"background-color","#555555"],[1,"p-2","bd-highlight","col-3",2,"background-color","#6d6c6c"],[1,"p-2","bd-highlight","col-3",2,"background-color","#848383"],[1,"p-2","bd-highlight","col-3",2,"background-color","#a3a0a0"]],template:function(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(d){return o.displayDialog=d}),t._uU(1),t.qZA(),t._UZ(2,"p-toast")(3,"p-toast",1)(4,"p-toast",2)(5,"p-toast",3),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"p",8),t._uU(11,"Student Entry Form"),t.qZA()(),t.TgZ(12,"div",9)(13,"div")(14,"mat-stepper",10,11)(16,"mat-step",12)(17,"form",13)(18,"div",14)(19,"mat-form-field",15)(20,"input",16),t.NdJ("blur",function(){return o.sameAsBillName()}),t.qZA(),t.YNc(21,j,2,1,"div",17),t.qZA()(),t.TgZ(22,"div",14)(23,"mat-form-field",15),t._UZ(24,"input",18),t.qZA()(),t.YNc(25,R,3,0,"div",19),t.YNc(26,H,3,0,"div",19),t.TgZ(27,"button",20),t._uU(28," Next "),t._UZ(29,"i",21),t.qZA()()(),t.TgZ(30,"mat-step",22)(31,"form",13)(32,"div",14)(33,"div",23)(34,"div",24)(35,"mat-form-field",15),t._UZ(36,"input",25,26),t.qZA()(),t.TgZ(38,"div",5)(39,"button",27),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(37);return t.KtG(o.guardianAsFather(d.value))}),t.qZA()()()(),t.TgZ(40,"div",14)(41,"div",23)(42,"div",24)(43,"mat-form-field",15),t._UZ(44,"input",28,29),t.qZA()(),t.TgZ(46,"div",5)(47,"button",30),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(45);return t.KtG(o.guardianAsMother(d.value))}),t.qZA()()()(),t.TgZ(48,"div",14)(49,"div",23)(50,"div",31)(51,"mat-form-field",15),t._UZ(52,"input",32),t.qZA()(),t.TgZ(53,"div",33),t._UZ(54,"ng-select",34),t.qZA()()(),t.TgZ(55,"div",35)(56,"button",36),t._UZ(57,"i",37),t._uU(58," Prev "),t.qZA(),t.TgZ(59,"button",38),t._uU(60," Next "),t._UZ(61,"i",21),t.qZA()()()(),t.TgZ(62,"mat-step",39)(63,"form",13)(64,"div",14)(65,"div",23)(66,"div",33)(67,"mat-form-field")(68,"mat-label"),t._uU(69,"Date Of Birth"),t.qZA(),t.TgZ(70,"input",40,41),t.NdJ("dateInput",function(){t.CHM(r);const d=t.MAs(71);return t.KtG(o.setDobSQL(d.value))}),t.qZA(),t.YNc(72,W,4,3,"div",17),t._UZ(73,"mat-datepicker-toggle",42)(74,"mat-datepicker",null,43),t.qZA(),t.TgZ(76,"mat-form-field",44)(77,"mat-label"),t._uU(78,"Qualification"),t.qZA(),t._UZ(79,"input",45),t.TgZ(80,"mat-autocomplete",46,47),t.YNc(82,X,2,2,"mat-option",48),t.ALo(83,"async"),t.qZA()(),t.TgZ(84,"p-selectButton",49),t.YNc(85,tt,3,4,"ng-template"),t.qZA(),t._UZ(86,"hr"),t.YNc(87,et,2,1,"div",50),t.YNc(88,nt,3,0,"button",51),t.qZA(),t.TgZ(89,"div",52)(90,"app-camera",53),t.NdJ("pictureTaken",function(d){return o.handleImage(d)}),t.qZA()()()(),t.TgZ(91,"div",35)(92,"button",36),t._UZ(93,"i",37),t._uU(94," Prev "),t.qZA(),t.TgZ(95,"button",38),t._uU(96," Next "),t._UZ(97,"i",21),t.qZA()()()(),t.TgZ(98,"mat-step",54)(99,"form",13)(100,"div",14)(101,"div",23)(102,"div",31)(103,"mat-form-field",55)(104,"mat-label"),t._uU(105,"Address:"),t.qZA(),t._UZ(106,"input",56),t.qZA()(),t.TgZ(107,"div",33)(108,"mat-form-field",55)(109,"mat-label"),t._uU(110,"City"),t.qZA(),t._UZ(111,"input",57),t.qZA()()(),t.TgZ(112,"div",23)(113,"div",58),t._UZ(114,"ng-select",59),t.qZA(),t.TgZ(115,"div",33)(116,"mat-form-field",55)(117,"mat-label"),t._uU(118,"Distict"),t.qZA(),t._UZ(119,"input",60),t.qZA()(),t.TgZ(120,"div",33)(121,"mat-form-field",55)(122,"mat-label"),t._uU(123,"Pin"),t.qZA(),t._UZ(124,"input",61),t.qZA()()()(),t.TgZ(125,"div",35)(126,"button",36),t._UZ(127,"i",37),t._uU(128," Prev "),t.qZA(),t.TgZ(129,"button",38),t._uU(130," Next "),t._UZ(131,"i",21),t.qZA()()()(),t.TgZ(132,"mat-step",62)(133,"form",13)(134,"div",14)(135,"div",23)(136,"div",31)(137,"mat-form-field",55)(138,"mat-label"),t._uU(139,"Guardian Contact"),t.qZA(),t._UZ(140,"input",63),t.qZA()()(),t.TgZ(141,"div",23)(142,"div",33)(143,"mat-form-field",55)(144,"mat-label"),t._uU(145,"WhatsApp Number"),t.qZA(),t._UZ(146,"input",64),t.qZA()()(),t.TgZ(147,"div",23)(148,"div",33)(149,"mat-form-field",55)(150,"mat-label"),t._uU(151,"E-Mail"),t.qZA(),t._UZ(152,"input",65),t.qZA()()()(),t.TgZ(153,"div",14)(154,"h5"),t._uU(155,"Description"),t.qZA(),t.TgZ(156,"p-editor",66),t.YNc(157,ot,4,0,"ng-template",67),t.qZA()(),t.TgZ(158,"div",35)(159,"button",36),t._UZ(160,"i",37),t._uU(161," Prev "),t.qZA(),t.TgZ(162,"button",38),t._uU(163," Next "),t._UZ(164,"i",21),t.qZA()()()(),t.TgZ(165,"mat-step"),t.YNc(166,it,1,0,"ng-template",68),t.TgZ(167,"p"),t._uU(168,"You are now done."),t.qZA(),t.TgZ(169,"div")(170,"button",69),t._UZ(171,"i",37),t.qZA(),t.TgZ(172,"button",70),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(15);return t.KtG(d.reset())}),t._UZ(173,"i",71),t.qZA(),t.YNc(174,st,3,1,"button",72),t.YNc(175,at,3,1,"button",72),t.qZA(),t.TgZ(176,"div")(177,"button",73),t.NdJ("click",function(){return o.clearStudent()}),t.TgZ(178,"i",74),t._uU(179," Clear "),t.qZA()()(),t.YNc(180,Nt,8,7,"div",75),t.qZA()()(),t.TgZ(181,"p-confirmDialog",76,77),t.YNc(183,xt,2,0,"ng-template",67),t.YNc(184,Ct,2,0,"ng-template",78),t.qZA()()()(),t.TgZ(185,"div",5)(186,"div",6)(187,"div",79)(188,"div",80)(189,"div",5)(190,"p-button",81),t.NdJ("click",function(){return o.visibleSidebar2=!0}),t.qZA()(),t.TgZ(191,"div",5)(192,"h3",82),t._uU(193,"Student Details"),t.qZA()()()(),t.TgZ(194,"div",6)(195,"h5"),t._uU(196,"Student List"),t.qZA(),t.TgZ(197,"p-table",83,84),t.YNc(199,Tt,5,0,"ng-template",85),t.YNc(200,At,18,0,"ng-template",67),t.YNc(201,Gt,13,4,"ng-template",86),t.YNc(202,St,1,0,"ng-template",87),t.qZA()()(),t.TgZ(203,"p-sidebar",88),t.NdJ("visibleChange",function(d){return o.visibleSidebar2=d}),t.TgZ(204,"h1",89),t._uU(205,"Right Sidebar"),t.qZA(),t.TgZ(206,"p-button",90),t.NdJ("click",function(){return o.visibleSidebar2=!1}),t.qZA(),t.TgZ(207,"p-button",91),t.NdJ("click",function(){return o.visibleSidebar2=!1}),t.qZA()()()(),t.YNc(208,It,2,4,"div",92),t.YNc(209,wt,38,30,"div",93)}if(2&e){const r=t.MAs(75),u=t.MAs(81);t.Akn(t.DdM(52,Ut)),t.Q6J("transitionOptions","600ms")("visible",o.displayDialog)("breakpoints",t.DdM(53,Mt)),t.xp6(1),t.hij(" ",o.dialogContent,"\n"),t.xp6(13),t.Q6J("linear",o.isLinear),t.xp6(2),t.Q6J("stepControl",o.studentNameFormGroup),t.xp6(1),t.Q6J("formGroup",o.studentNameFormGroup),t.xp6(4),t.Q6J("ngIf",o.studentNameFormGroup.controls.studentName.errors&&o.studentNameFormGroup.controls.studentName.touched),t.xp6(3),t.s9C("value",o.billingName),t.xp6(1),t.Q6J("ngIf",o.hiddenInput),t.xp6(1),t.Q6J("ngIf",o.hiddenInput),t.xp6(1),t.Q6J("disabled",!o.studentNameFormGroup.valid),t.xp6(3),t.Q6J("stepControl",o.studentGuardianFormGroup),t.xp6(1),t.Q6J("formGroup",o.studentGuardianFormGroup),t.xp6(23),t.Q6J("items",o.relations),t.xp6(8),t.Q6J("stepControl",o.studentBasicFormGroup),t.xp6(1),t.Q6J("formGroup",o.studentBasicFormGroup),t.xp6(7),t.Q6J("matDatepicker",r),t.xp6(2),t.Q6J("ngIf",o.studentBasicFormGroup.controls.dob.errors&&o.studentBasicFormGroup.controls.dob.touched),t.xp6(1),t.Q6J("for",r),t.xp6(6),t.Q6J("matAutocomplete",u),t.xp6(3),t.Q6J("ngForOf",t.lcZ(83,50,o.filteredQualifications)),t.xp6(2),t.Q6J("options",o.genders),t.xp6(3),t.Q6J("ngIf",o.webcamImage),t.xp6(1),t.Q6J("ngIf",o.webcamImage),t.xp6(10),t.Q6J("stepControl",o.studentAddressFormGroup),t.xp6(1),t.Q6J("formGroup",o.studentAddressFormGroup),t.xp6(15),t.Q6J("items",o.stateList),t.xp6(18),t.Q6J("stepControl",o.studentContactFormGroup),t.xp6(1),t.Q6J("formGroup",o.studentContactFormGroup),t.xp6(23),t.Akn(t.DdM(54,yt)),t.xp6(18),t.Q6J("ngIf",!o.isShown),t.xp6(1),t.Q6J("ngIf",o.isShown),t.xp6(5),t.Q6J("ngIf",o.showErrorMessage),t.xp6(1),t.Akn(t.DdM(55,Jt)),t.Q6J("transitionOptions","0.8ms"),t.xp6(16),t.Q6J("value",o.students)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(56,Qt))("globalFilterFields",t.DdM(57,Dt)),t.xp6(6),t.Q6J("visible",o.visibleSidebar2)("baseZIndex",2e4),t.xp6(5),t.Q6J("ngIf",!o.isProduction),t.xp6(1),t.Q6J("ngIf",o.showDeveloperDiv&&!o.isProduction)}},dependencies:[p.sg,p.O5,g.TO,g.KE,g.hX,g.R9,C.Nt,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,T.lW,A.Q,G.Hq,G.zx,m.jx,f.iA,f.lQ,f.fz,S.V,F.u,I.FN,i.sg,i.u,c.C0,c.VY,c.Vq,c.Ic,c.fd,q.w9,_.Mq,_.hl,_.nW,w.UN,U.CO,M.ML,V.M,y.Y,J.xm,v.XC,v.ZL,Q.ey,p.Ov,p.Ts],styles:["[_nghost-%COMP%]{color:#1e293b}table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.ui-steps[_ngcontent-%COMP%]   .ui-steps-item[_ngcontent-%COMP%]{width:25%}.ui-steps.steps-custom[_ngcontent-%COMP%]{margin-bottom:30px}.ui-steps.steps-custom[_ngcontent-%COMP%]   .ui-steps-item[_ngcontent-%COMP%]   .ui-menuitem-link[_ngcontent-%COMP%]{padding:0 1em;overflow:visible}.ui-steps.steps-custom[_ngcontent-%COMP%]   .ui-steps-item[_ngcontent-%COMP%]   .ui-steps-number[_ngcontent-%COMP%]{background-color:#0081c2;color:#fff;display:inline-block;width:36px;border-radius:50%;margin-top:-14px;margin-bottom:10px}.ui-steps.steps-custom[_ngcontent-%COMP%]   .ui-steps-item[_ngcontent-%COMP%]   .ui-steps-title[_ngcontent-%COMP%]{color:#555}.ng-select.custom[_ngcontent-%COMP%]     .ng-select-container{min-height:50px;border-radius:0}.p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:0rem!important}"]}),n})()}];let Yt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(kt),h.Bz]}),n})();var Bt=a(3425),Ot=a(8377),Lt=a(9364),Et=a(1236),Vt=a(9764),Pt=a(2210),jt=a(2965),Rt=a(5261);let Ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,Yt,C.c,i.u5,T.ot,A.D,Bt.gz,Ot.kK,Lt.S,f.U$,S.S,Et.q,I.EV,i.UX,Vt.Q,c.T5,Pt.kW,q.A0,_.FA,Q.XK,w.Qy,U.KZ,M.Z_,jt.Tm,Rt.CameraModule,F.z,y.l,J.IJ,v.Bb,x.F2]}),n})()}}]);