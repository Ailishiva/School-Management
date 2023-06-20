import React from 'react';
import './DashBoard.css'
const Dashboard = () => {
    return (
        <div>
            <div className='dashboard-conatiner'>
            <p className='para'>Demo resets every 4 hours. Feel free to test all the features before purchasing, keep in mind that some features are disabled. As there are many users checking demo simultaneously, so if you found any inconsistency then please try demo after sometime or report us at <a style={{color:'red'}}>https://support.qdocs.net.</a></p>
            <div style={{ display: "flex"}}>
            <div style={{width:"60%",display:"flex", margin:"9px",  boxShadow: "1px 2px 2px 1px gray"}}><img style={{width: "104px" ,height: "98px"}} src="https://demo.smart-school.in/uploads/student_images/1679478951-1009523138641ad0a7462fe!1.jpg?1686739357?1686739357"/>
            {/* <div> <span style={{fontSize: 23}}>Welcome, Edward Thomas! Keep Going</span></div> */}
            <span class="col-lg-9 col-md-9 col-sm-9">										
          <span class="mt0" style={{fontSize: "larger"}}>Welcome, Edward Thomas! Keep Going.</span>
            <p class="text-success">Your current attendance is 88.89% which is above 75.00% of minimum attendance mark.</p>
                                                         
            </span>
                        </div>
                        <div style={{width: "48%", boxShadow: "1px 1px 1px 2px gray", margin: "10px"}}>
                            <div style={{marginLeft:"10px"}}>
            <h3>Notice Board</h3>
            
            <p>
            <img src='https://demo.smart-school.in/backend/images/unread_two.png'/>
            <span> Online Classes preparation</span> (<i class="fa fa-clock-o text-aqua" style={{color:'gray'}}></i>06/06/2023)
            </p>
            <p>
            <img src='https://demo.smart-school.in/backend/images/unread_two.png'/>
            <span> Student Health CheckUp</span> (<i class="fa fa-clock-o text-aqua" style={{color:'gray'}}></i>06/01/2023)
            </p>
            <p>
            <img src='https://demo.smart-school.in/backend/images/unread_two.png'/>
            <span> World Enviornment Day Programme...........!!!!!!!!!!!</span> (<i class="fa fa-clock-o text-aqua" style={{color:'gray'}}></i>06/03/2023)
            </p>
            <p>
            <img src='https://demo.smart-school.in/backend/images/unread_two.png'/>
            <span> !!!Notice for New Book collection</span> (<i class="fa fa-clock-o text-aqua" style={{color:'gray'}}></i>06/03/2023)
            </p>
            </div>
            </div>
            </div>
            <div style={{display:"flex"}}>
            <div  style={{ height: 100}}>
                <h6 style={{color: "gray"}}>Subject Progress</h6>
                <table className='table-fixed' style={{margin: 20,width: "350px", height: 50, border: "1px solid gray", overflowY:"auto"}}>
                    <tbody >
                        <tr >
                        <th >Subject</th>
                        <th>Progress</th>
                        </tr>
                        <tr><td>English(210)</td>
                        <td>33%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"33%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr>
                        <tr><td>Hindi(230)</td>
                        <td>25%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"25%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr><tr><td>Mathematics(110)</td>
                        <td>14%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"14%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr><tr><td>Science(111) </td>
                        <td>50%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"50%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr><tr><td>Scoial Studies(212)</td>
                        <td>100%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"100%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr><tr><td>Drawing(200)</td>
                        <td>0%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"0%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr><tr><td>Computer(00220)</td>
                        <td>33%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"50%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr><tr><td>Elective 1 (101)</td>
                        <td>50%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"50%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr>
                        <tr><td>Elective 2 (102)</td>
                        <td>0%
                        <div class="progress progress-minibar" style={{height:"10px"}}>
										  <div class="progress-bar progress-bar-success" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{width:"0%", backgroundColor:"green", height:10}}>
										  </div>
						</div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div  >
                <h6 style={{color: "gray"}}>UpComming Class </h6>
                <ul style={{ width: "350px", height: 400, overflowY: "auto" , border: "1px solid gray"}}>
                    <li className='lecture-list'>
                    <img src="https://demo.smart-school.in/uploads/staff_images/5.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>
                    <div class="set-flex">
					                <div class="media-title bmedium">Jason Sharlton (900002301) 
					                </div>
					                <div class="text-muted mb0">
					                	English (210)                          	
                                    </div>
			            		</div>
                    <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">10:00 AM-10:35 AM</div>
				    </div>
                    </li>
                    <li class="lecture-list">

			            		<img src="https://demo.smart-school.in/uploads/staff_images/2.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Shivam Verma (9002) 
					                </div>
					                <div class="text-muted mb0">
					                	Social Studies (212)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">10:35 AM-11:10 AM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            					                    <img src="https://demo.smart-school.in/uploads/staff_images/5.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Jason Sharlton (900002301) 
					                </div>
					                <div class="text-muted mb0">
					                	Science (111)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">11:10 AM-11:45 AM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            					                    <img src="https://demo.smart-school.in/uploads/staff_images/2.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Shivam Verma (9002) 
					                </div>
					                <div class="text-muted mb0">
					                	Mathematics (110)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">11:45 AM-12:20 PM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            					                    <img src="https://demo.smart-school.in/uploads/staff_images/2.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Shivam Verma (9002) 
					                </div>
					                <div class="text-muted mb0">
					                	English (210)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">10:00 AM-10:35 AM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            					                    <img src="https://demo.smart-school.in/uploads/staff_images/5.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Jason Sharlton (900002301) 
					                </div>
					                <div class="text-muted mb0">
					                	Social Studies (212)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">10:35 AM-11:10 AM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            					                    <img src="https://demo.smart-school.in/uploads/staff_images/2.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Shivam Verma (9002) 
					                </div>
					                <div class="text-muted mb0">
					                	Mathematics (110)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">11:10 AM-11:45 AM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            					                    <img src="https://demo.smart-school.in/uploads/staff_images/5.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Jason Sharlton (900002301) 
					                </div>
					                <div class="text-muted mb0">
					                	Science (111)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">11:45 AM-12:20 PM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            		<img src="https://demo.smart-school.in/uploads/staff_images/2.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Shivam Verma (9002) 
					                </div>
					                <div class="text-muted mb0">
					                	English (210)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">10:00 AM-10:35 AM</div>
				                 </div>
			                </li>
                            <li class="lecture-list">

			            		<img src="https://demo.smart-school.in/uploads/staff_images/5.jpg?1686898991" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

				                <div class="set-flex">
					                <div class="media-title bmedium">Jason Sharlton (900002301) 
					                </div>
					                <div class="text-muted mb0">
					                	Social Studies (212)                          	
                                    </div>
			            		</div>    
				                 <div class="ms-auto">
					                <div class="bmedium">Room No.:120</div>
					                <div class="text-muted mb0">10:35 AM-11:10 AM</div>
				                 </div>
			                </li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12" style={{width: "372px"}}>
				<div class="box box-primary borderwhite">
                    <div class="box-header with-border">
                        <h3 class="box-title">Homework</h3>      
                    </div>

                    <div class="box-body direct-chat-messages">
                    	
						                    	<ul class="user-progress ps">
                    			                    			                <li class="doc-file-type">
				                <div class="set-flex">
					                <div class="media-title font-16"><a href="https://demo.smart-school.in/user/homework" class="displayinline text-muted" target="_blank">Elective 1 (101)									
									</a></div>
					                <div class="text-muted mb0">Homework Date: 06/24/2023, Submission Date: 06/30/2023, Status:                                         <label class="label label-danger">Pending</label>
								    
					            </div>
			            		</div> 
			                </li>
			            	                    			                <li class="doc-file-type">
				                <div class="set-flex">
					                <div class="media-title font-16"><a href="https://demo.smart-school.in/user/homework" class="displayinline text-muted" target="_blank">English (210)									
									</a></div>
					                <div class="text-muted mb0">Homework Date: 06/16/2023, Submission Date: 06/22/2023, Status:                                         <label class="label label-danger">Pending</label>
								    
					            </div>
			            		</div> 
			                </li>
			            	                    	                    	                    			                
			            </ul> 
						                    </div>
                </div>
            </div>
            </div>
           <div style={{display: 'flex'}}>
            <div class="col-lg-3 col-md-3 col-sm-12">
        <div class="box box-primary borderwhite " style={{width: "269px",margin: "5px"}}>
            <div class="box-header with-border">
                <h3 class="box-title">Teacher List</h3>      
            </div>

            <div class="box-body direct-chat-messages">                    	
                                        <ul class="user-progress ps">
                                                <li class="lecture-list">

                                                        <img src="https://demo.smart-school.in/uploads/staff_images/2.jpg?1686914661" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

                        <div class="set-flex">
                            <div class="media-title bmedium">Shivam Verma<br/> (9002) <span class="label label-success bolds">Class Teacher</span>	 
                            </div>
                             
                        </div>  
                    </li>
                    
                                                <li class="lecture-list">

                                                        <img src="https://demo.smart-school.in/uploads/staff_images/5.jpg?1686914661" alt="" class="img-circle msr-3 object-fit-cover fit-image-40" width="40" height="40"/>

                        <div class="set-flex">
                            <div class="media-title bmedium">Jason Sharlton<br/> (900002301) <span class="label label-success bolds">Class Teacher</span>	 
                            </div>
                             
                        </div>  
                    </li>
                    
                                                                
                </ul> 
                                    </div>
        </div>
        </div>
		<div class="col-lg-4 col-md-4 col-sm-12">
				<div class="box box-primary borderwhite">
                    <div class="box-header with-border">
                        <h3 class="box-title">Visitor List</h3>      
                    </div>
                    <div class="box-body direct-chat-messages">
						                    	<ul class="user-progress ps" style={{margin: "3px", width: 310, height: 400, overflowY: "auto" , border: "1px solid gray"}}>                    		 
	                    			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Hemant Rao</b><br/> (Purpose: Student Meeting)				
									</div>									
					                <div class="text-muted mb0">06/30/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Lokesh Shah</b><br/> (Purpose: School Events)				
									</div>									
					                <div class="text-muted mb0">06/20/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Jhonson</b><br/> (Purpose: Parent Teacher Meeting)				
									</div>									
					                <div class="text-muted mb0">06/10/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Sinu Raina	</b><br/> (Purpose: Student Meeting)				
									</div>									
					                <div class="text-muted mb0">06/05/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Lawrence</b><br/> (Purpose: School Events)				
									</div>									
					                <div class="text-muted mb0">06/01/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Lokesh Singh</b><br/> (Purpose: School Events)				
									</div>									
					                <div class="text-muted mb0">05/15/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Jack </b><br/> (Purpose: Parent Teacher Meeting)				
									</div>									
					                <div class="text-muted mb0">05/10/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Glen Wood</b><br/> (Purpose: Parent Teacher Meeting)				
									</div>									
					                <div class="text-muted mb0">05/05/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Alex Martin</b><br/> (Purpose: Student Meeting)				
									</div>									
					                <div class="text-muted mb0">05/01/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Usmaan</b><br/> (Purpose: Student Meeting)				
									</div>									
					                <div class="text-muted mb0">04/18/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Lawrence</b><br/> (Purpose: Parent Teacher Meeting)				
									</div>									
					                <div class="text-muted mb0">04/12/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>William</b><br/> (Purpose: Staff Meeting)				
									</div>									
					                <div class="text-muted mb0">04/08/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Harper</b><br/> (Purpose: Student Meeting)				
									</div>									
					                <div class="text-muted mb0">04/05/2023					               </div>
			            		</div> 			               
			                </li>
			            			                <li class="doc-file-type">			                   
				                <div class="set-flex">
					                <div class="text-muted mb0">
										<b>Avery</b><br/> (Purpose: Marketing )				
									</div>									
					                <div class="text-muted mb0">04/01/2023					               </div>
			            		</div> 			               
			                </li>
			            			                
			            </ul>
											
                    </div>                   
                </div>    
			</div>
			<div class="col-lg-5 col-md-5 col-sm-12">
				<div class="box box-primary borderwhite">
                    <div class="box-header with-border">
                        <h3 class="box-title">Library Book Issue List</h3>      
                    </div>

                    <div class="box-body direct-chat-messages">
                    	<div class="table-responsive">
                    		<table class="table table-striped table-hover" style={{ width: 524, height: 400, overflowY: "auto" , border: "1px solid gray"}}>
                    			<tbody><tr class="active">
                    				<th>Book No.</th>
                    				<th>Book Title</th>
                    				<th>Issue Date</th>                    				 
                    				<th>Due Return</th>
                    			</tr>                    			
                                </tbody><tbody>
                                                                    <tr>	
										<td class="mailbox-name"> 3250</td>
                                        <td class="mailbox-name"> Hindi the native language <br/> (J S VARMA)</td>                                                         
                                        <td class="mailbox-name"> 
                                            03/31/2023                                        </td> 
                                        <td>

                                            04/20/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 125487</td>
                                        <td class="mailbox-name"> NUmber System <br/> (K S SHARMA)</td>                                                         
                                        <td class="mailbox-name"> 
                                            12/03/2022                                        </td> 
                                        <td>

                                            12/26/2022 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 1578</td>
                                        <td class="mailbox-name"> Global Warming <br/> (I A JAYETI)</td>                                                         
                                        <td class="mailbox-name"> 
                                            12/03/2022                                        </td> 
                                        <td>

                                            12/31/2022 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 7859</td>
                                        <td class="mailbox-name"> Coal and Mine Chapter 2 <br/> (U K PELLY)</td>                                                         
                                        <td class="mailbox-name"> 
                                            01/03/2023                                        </td> 
                                        <td>

                                            01/01/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 1254</td>
                                        <td class="mailbox-name"> Ice-cream Man Poem <br/> (W L LUWIS)</td>                                                         
                                        <td class="mailbox-name"> 
                                            01/03/2023                                        </td> 
                                        <td>

                                            01/05/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 7859</td>
                                        <td class="mailbox-name"> Coal and Mine Chapter 2 <br/> (U K PELLY)</td>                                                         
                                        <td class="mailbox-name"> 
                                            01/03/2023                                        </td> 
                                        <td>

                                            01/10/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> LJJ5675</td>
                                        <td class="mailbox-name"> Human Body Systems <br/> (Kalvin Shah)</td>                                                         
                                        <td class="mailbox-name"> 
                                            02/02/2023                                        </td> 
                                        <td>

                                            02/10/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> DF5453</td>
                                        <td class="mailbox-name"> Global Warming <br/> (Daniel)</td>                                                         
                                        <td class="mailbox-name"> 
                                            02/02/2023                                        </td> 
                                        <td>

                                            02/15/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 8975</td>
                                        <td class="mailbox-name"> Number System <br/> (K S SHARMA)</td>                                                         
                                        <td class="mailbox-name"> 
                                            03/14/2023                                        </td> 
                                        <td>

                                            03/17/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 254</td>
                                        <td class="mailbox-name"> Periodic Classification of Elements <br/> (K A KARIYAAPA)</td>                                                         
                                        <td class="mailbox-name"> 
                                            01/03/2023                                        </td> 
                                        <td>

                                            01/25/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 2112</td>
                                        <td class="mailbox-name"> Major Events of the Post-Independence period <br/> (Rahul Patel)</td>                                                         
                                        <td class="mailbox-name"> 
                                            03/31/2023                                        </td> 
                                        <td>

                                            04/25/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> 30210</td>
                                        <td class="mailbox-name"> Food And Fun <br/> (George   Martin)</td>                                                         
                                        <td class="mailbox-name"> 
                                            05/01/2023                                        </td> 
                                        <td>

                                            05/31/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> ASA320</td>
                                        <td class="mailbox-name"> The Valley of Flowers <br/> (K.N .Rana)</td>                                                         
                                        <td class="mailbox-name"> 
                                            06/02/2023                                        </td> 
                                        <td>

                                            06/23/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> AS2512</td>
                                        <td class="mailbox-name"> Play with Patterns <br/> (L.G. Singh)</td>                                                         
                                        <td class="mailbox-name"> 
                                            06/02/2023                                        </td> 
                                        <td>

                                            06/21/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> JH2554</td>
                                        <td class="mailbox-name"> Global Warming -3 <br/> (D.K Singh)</td>                                                         
                                        <td class="mailbox-name"> 
                                            06/02/2023                                        </td> 
                                        <td>

                                            06/28/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> SS6202</td>
                                        <td class="mailbox-name"> The Little Fir Tree <br/> (G.N . Rana)</td>                                                         
                                        <td class="mailbox-name"> 
                                            06/02/2023                                        </td> 
                                        <td>

                                            06/18/2023 
											
                                        </td>                                   
                                    </tr>
									                                    <tr>	
										<td class="mailbox-name"> KLL0998</td>
                                        <td class="mailbox-name"> Periodic Classification of Elements -2 <br/> (H.K.Verma)</td>                                                         
                                        <td class="mailbox-name"> 
                                            06/02/2023                                        </td> 
                                        <td>

                                            06/29/2023 
											
                                        </td>                                   
                                    </tr>
									      
                                            
                                
                                </tbody>
                            </table>                    			
                    	</div>
                    </div>
                </div>    
			</div>
			</div>
		</div>
        </div>
        
      
   
        
    );
};

export default Dashboard;