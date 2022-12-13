let student= [
    {
        ID:"01",
        Name:"Daisuke",
        Email:"Daisuk@gmail.com",
        Score:{
            C:90,
            Java:67,
            SQL:45,
        },
    },
    {
        ID:"02",
        Name:"Zyne",
        Email:"Zennyzo@gmail.com",
        Score:{C:90,
            Java:67,
            SQL:45,},
    },
    {
        ID:"03",
        Name:"Lysynth",
        Email:"SunChanny@gmail.com",
        Score:{C:90,
            Java:67,
            SQL:45,},
    }
];

    document.write(`<div class="container text-center">
    <div class="row">
      <div class="col tt">
        ID
      </div>
      <div class="col-2 tt">
        Name
      </div>
      <div class="col-3 tt">
        Email
      </div>
      <div class="col-6">
        Score
        <div class="row">
          <div class="col-4">
            C#
          </div>
          <div class="col-4">
            Java
          </div>
          <div class="col-4">
            Net
          </div>
        </div>
      </div>
    </div>
  </div>`);
for ( student of student){
    document.write(`<div class="container text-center">
<div class="row">
  <div class="col-1 tt">
  ${student.ID}
  </div>
  <div class="col-2 tt">
  ${student.Name}
  </div>
  <div class="col-3 tt">
  ${student.Email}
  </div>
  <div class="col">
    <div class="row">
      <div class="col tt">
        ${student.Score.C}
      </div>
      <div class="col tt">
      ${student.Score.Java}
      </div>
      <div class="col tt">
      ${student.Score.SQL}
      </div>
    </div>
  </div>
</div>
</div>`);
};

