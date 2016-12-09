function setLevel(target, config){
  var rarity_maxlv_map = [
    1, 30, 40, 50, 60, 70
  ];
  var maxlv = rarity_maxlv_map[config["rarity"]];

  for(var i = 0; i <= 4; i++){
    $(target).children("td").eq(i + 1).html(
      "Lv " + (maxlv + i * 5)
    );
  }
}

function setAtk(target, config){
  var rarity_maxlv_map = [
    1, 30, 40, 50, 60, 70
  ];
  var min = config["min-atk"];
  var max = config["max-atk"];
  var maxlv = rarity_maxlv_map[config["rarity"]];

  $(target).children("td").eq(0).html(min);
  $(target).children("td").eq(1).html(max);
  for(var i = 1; i <= 4; i++){
    $(target).children("td").eq(i + 1).html(
      Math.round(((max - min) / (maxlv - 1)) * ((maxlv + i * 5) - 1) + min)
    );
  }
}

function setHp(target, config){
  var rarity_maxlv_map = [
    1, 30, 40, 50, 60, 70
  ];
  var min = config["min-hp"];
  var max = config["max-hp"];
  var maxlv = rarity_maxlv_map[config["rarity"]];

  $(target).children("td").eq(0).html(min);
  $(target).children("td").eq(1).html(max);
  for(var i = 1; i <= 4; i++){
    $(target).children("td").eq(i + 1).html(
      Math.round(((max - min) / (maxlv - 1)) * ((maxlv + i * 5) - 1) + min)
    );
  }
}

function setDmg(target, config){
  var rarity_maxlv_map = [
    1, 30, 40, 50, 60, 70
  ];
  var min = config["skill-min-dmg"];
  var inc = config["skill-inc-dmg"];
  var maxlv = rarity_maxlv_map[config["rarity"]];

  $(target).children("td").eq(0).html(min);
  for(var i = 0; i <= 4; i++){
    $(target).children("td").eq(i + 1).html(
      min + inc * ((maxlv + i * 5) - 1)
    );
  }
}

function setEffect(target, config){
  var rarity_maxlv_map = [
    1, 30, 40, 50, 60, 70
  ];
  var type = (config["skill-effect-type"] == "probability" ? "機率" : "幅度");
  var min = config["skill-min-effect"];
  var inc = config["skill-inc-effect"];
  var maxlv = rarity_maxlv_map[config["rarity"]];

  $(target).children("th").eq(0).html(type);
  $(target).children("td").eq(0).html(min);
  for(var i = 0; i <= 4; i++){
    $(target).children("td").eq(i + 1).html(
      Math.round(min + inc * ((maxlv + i * 5) - 1)) + config["skill-effect-unit"]
    );
  }
}

function setSkill(target, config){
  $(target).html(
    '<img height="20px" src="/images/Skillicon.png">'
    + '<font color="#FAEFBC">' + config["skill-name"] + '</font><br>'
    + config["skill-desc"].replace("value", "傷害").replace("delay1", "幅度").replace("probability", "機率")
  );
}

function setAbility1(target, config){
  if(config["ability1-name"] === undefined
    || config["ability1-desc"] === undefined){
    return;
  }

  $(target).html(
    '<img height="20px" src="/images/Abilityicon.png">'
    + '<font color="#FAEFBC">' + config["ability1-name"] + '</font><br>'
    + config["ability1-desc"]
  );
}

function setAbility2(target, config){
  if(config["ability2-name"] === undefined
    || config["ability2-desc"] === undefined){
    return;
  }

  $(target).html(
    '<img height="20px" src="/images/Abilityicon.png">'
    + '<font color="#FAEFBC">' + config["ability2-name"] + '</font><br>'
    + config["ability2-desc"]
  );
}

function init(config){
  $("#background-img").attr("src", "/images/wallpaper/" + config["id"] + ".jpg");
  $("#daemon-name").html(config["name"]);
  $("#daemon-card-img").attr("src", "/images/card/" + config["id"] + ".jpg");
  $("#daemon-desc").html(config["desc"].replace(/color=/ig, "font color=").replace(/\/color/ig, "/font"));
  setLevel($("#level"), config);
  setAtk($("#atk"), config);
  setHp($("#hp"), config);
  setDmg($("#dmg"), config);
  setEffect($("#effect"), config);
  setSkill($("#skill"), config);
  setAbility1($("#ability1"), config);
  setAbility2($("#ability2"), config);
  $("#obtain font").html(config["quotes-obtain"]);
  $("#skilling font").html(config["quotes-skill"]);
  $("#awake font").html(config["quotes-awake"]);
  $("#illustrator").html(config["illustrator"]);
}