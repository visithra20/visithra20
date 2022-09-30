import React from "react";
import { useState, useEffect } from "react";

function Muscle({ match }) {
  console.log(match.params.id);

  const [img, setImg] = useState("");
  const [workout, setWorkout] = useState([]);
  const [head, setHead] = useState("");

  function setdata() {
    if (match.params.id === "1") {
      setImg(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRolUr1j8OFDtf-OrP9gq6_4UfhviogEIRuA&usqp=CAU"
      );
      setWorkout([
        "Bench press - (3*15)",
        "Inclined Bench press - (3*15)",
        "Barbell Press - (3*15)",
        "Declined dumbell Press - (3*15)",
        "Pull over - (3*15)",
      ]);
      setHead("CHEST WORK OUT");
    } else if (match.params.id === "2") {
      setImg(
        "https://i.pinimg.com/originals/fc/2e/86/fc2e86a05c86501d51705284cf4e319b.jpg"
      );
      setWorkout(["shouler press - (3*5)",        
      "dumbell lateral raise - (3*5)",
        "upright rows - (3*5)",
        "cable front raise - (3*5)",
        "srugs - (3*5)",]);
      setHead("SHOULDER WORK OUT");
    } else if (match.params.id === "3") {
      setImg(
        "https://assets.gqindia.com/photos/5cdc548278e364ceaf6fec78/master/pass/triceps-top-image.jpg"
      );
      setWorkout(["rope pull down - (3*5)",
        "dumbell kick back (3*5)",
        "skull crushers - (3*5)",
        "overhead rope extension - (3*5)",
        "bench dips - (3*5)"]);
      setHead("TRICEP WORK OUT");
    } else if (match.params.id === "4") {
      setImg(
        "https://www.teahub.io/photos/full/28-284379_photo-wallpaper-man-workout-gym-working-gym-workout.jpg"
      );
      setWorkout(["barbell curls - (3*5)", 
        "dumbell curls - (3*5)",
        "preaches curls - (3*5)",
        "double arm cable curls - (3*5)",
        "concentration curls - (3*5)"]);
      setHead("BICEPS WORK OUT");
    } else if (match.params.id === "5") {
      setImg(
        "https://www.bodybuilding.com/images/2016/june/5-leg-workouts-for-mass-header-v2.jpg"
      );
      setWorkout(["squat - (3*5)",
        "calf raise - (3*5)",
        "lunges - (3*5)",
        "lying leg curls - (3*5)",
        "leg pres - (3*5)"]);
      setHead("LEGS WORK OUT");
    } else if (match.params.id === "6") {
      setImg(
        "https://img5.goodfon.com/wallpaper/nbig/e/66/spina-muscle-myshtsy-back-turnik-workout-trenazhernyi-zal-gy.jpg"
      );
      setWorkout(["Dead lift - (3*5)",
      "cable row - (3*5)",
      "wide grip pull ups - (3*5)",
      "T bar row - (3*5)",
      "pull over - (3*5)"]);
      setHead("LATS WORK OUT");
    }
  }

  useEffect(function () {
    console.log(typeof match.params.id);
    setdata();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "rgba(123, 136, 135, 0.5)",
          height: "80%",
          display: "flex",
          // opacity:0.3,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "55%", height: "55%", opacity: 1, borderRadius:"30" }}
          src={img}
      
        ></img>
        <div>
          <h1>{head}</h1>

          <ol>
            {workout.map(function (item) {
              return <li>{item}</li>;
            })}
            {/* <li>Bench Press</li>
          <li>Inclined Dumbell Press</li>
          <li>Declined Dumbell Press</li>
          <li>Cable Cross Flys</li> */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Muscle;
