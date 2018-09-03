import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private rowData;
  private columnDefs;
  private defaultColDef;
  private components;
  private rowSelection;

  private username : string;

  private firstName: string;
  private lastName: string;
  private gender: string;
  private country: string;
  private address: string;


  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router, private data: DataService) {
    this.columnDefs = [
      {
        field: "firstName",
      },
      {
        field: "lastName",
      },
      {
        field: "gender",
        editable: false
      },
      {
        field: "country",
      },
      {
        field: "address",
        editable: false
      }
    ];
    this.rowData = [
      {
        firstName: "Bob",
        lastName: "Harrison",
        gender: "Male",
        address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
        country: "Ireland"
      },
      {
        firstName: "Mary",
        lastName: "Wilson",
        gender: "Female",
        address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
        country: "Ireland"
      },
      {
        firstName: "Sadiq",
        lastName: "Khan",
        gender: "Male",
        address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
        country: "Ireland"
      },
      {
        firstName: "Jerry",
        lastName: "Mane",
        gender: "Male",
        address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
        country: "Ireland"
      },
      {
        firstName: "Bob",
        lastName: "Harrison",
        gender: "Male",
        address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
        country: "Ireland"
      },
      {
        firstName: "Mary",
        lastName: "Wilson",
        gender: "Female",
        address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
        country: "Ireland"
      },
      {
        firstName: "Sadiq",
        lastName: "Khan",
        gender: "Male",
        address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
        country: "Ireland"
      },
      {
        firstName: "Jerry",
        lastName: "Mane",
        gender: "Male",
        address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
        country: "Ireland"
      },
      {
        firstName: "Bob",
        lastName: "Harrison",
        gender: "Male",
        address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
        country: "Ireland"
      },
      {
        firstName: "Mary",
        lastName: "Wilson",
        gender: "Female",
        address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
        country: "Ireland"
      },
      {
        firstName: "Sadiq",
        lastName: "Khan",
        gender: "Male",
        address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
        country: "Ireland"
      },
      {
        firstName: "Jerry",
        lastName: "Mane",
        gender: "Male",
        address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
        country: "Ireland"
      },
      {
        firstName: "Bob",
        lastName: "Harrison",
        gender: "Male",
        address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
        country: "Ireland"
      },
      {
        firstName: "Mary",
        lastName: "Wilson",
        gender: "Female",
        address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
        country: "Ireland"
      },
      {
        firstName: "Sadiq",
        lastName: "Khan",
        gender: "Male",
        address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
        country: "Ireland"
      },
      {
        firstName: "Jerry",
        lastName: "Mane",
        gender: "Male",
        address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
        country: "Ireland"
      },
      {
        firstName: "Bob",
        lastName: "Harrison",
        gender: "Male",
        address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
        country: "Ireland"
      },
      {
        firstName: "Mary",
        lastName: "Wilson",
        gender: "Female",
        address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
        country: "Ireland"
      },
      {
        firstName: "Sadiq",
        lastName: "Khan",
        gender: "Male",
        address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
        country: "Ireland"
      },
      {
        firstName: "Jerry",
        lastName: "Mane",
        gender: "Male",
        address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
        country: "Ireland"
      },
      {
        firstName: "Bob",
        lastName: "Harrison",
        gender: "Male",
        address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
        country: "Ireland"
      },
      {
        firstName: "Mary",
        lastName: "Wilson",
        gender: "Female",
        address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
        country: "Ireland"
      },
      {
        firstName: "Sadiq",
        lastName: "Khan",
        gender: "Male",
        address: "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
        country: "Ireland"
      },
      {
        firstName: "Jerry",
        lastName: "Mane",
        gender: "Male",
        address: "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
        country: "Ireland"
      }
    ];
    this.defaultColDef = { editable: true };
    this.username = this.data.username;
    this.rowSelection = "multiple";
  }

  getRowData() {
    var rowData = [];
    this.gridApi.forEachNode(function(node) {
      rowData.push(node.data);
    });
    console.log("Row Data:");
    console.log(rowData);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.updateRowData({ remove: selectedData });
  }

 createNewRowData() {
  var newData = {
    firstName : this.firstName,
    lastName : this.lastName,
    gender : this.gender,
    country : this.country,
    address : this.address
  };
  this.rowData.push(newData);
  var res = this.gridApi.updateRowData({ add: [newData] });
}

  Logout() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
