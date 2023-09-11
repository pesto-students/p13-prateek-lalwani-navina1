
function updateScore() {
	const AV=document.querySelector(`input[name="AV"]:checked`);
    const AC=document.querySelector(`input[name="AC"]:checked`);
    const PR=document.querySelector(`input[name="PR"]:checked`);
    const UI=document.querySelector(`input[name="UI"]:checked`);
    const scope=document.querySelector(`input[name="scope"]:checked`);
    const conf=document.querySelector(`input[name="conf"]:checked`);
    const integ=document.querySelector(`input[name="integ"]:checked`);
    const avail=document.querySelector(`input[name="avail"]:checked`);
    const health=document.querySelector(`input[name="health"]:checked`);
    const sens=document.querySelector(`input[name="sens"]:checked`);
    if(AV && AC && PR && UI && scope && conf && integ && avail && health && sens){
        const warning=document.getElementById("warning");
        warning.style.display="none";
        let avScore;
        let acScore;
        let prScore;
        let uiScore;

        if (AV.value == "AV_N") {
            avScore = 0.85;
        } else if (AV.value == "AV_A") {
            avScore = 0.62;
        } else if (AV.value == "AV_L") {
            avScore = 0.55;
        } else if (AV.value == "AV_P") {
            avScore = 0.20;
        }
        
        if (AC.value == "AC_L") {
            acScore = 0.77;
        } else if (AC.value == "AC_H") {
            acScore = 0.44;
        }

        if (PR.value == "PR_N") {
            prScore = 0.85;
        } else if (PR.value == "PR_L") {
            prScore = 0.62;
        } else if (PR.value == "PR_H") {
            prScore = 0.27;
        }

        if (UI.value == "UI_N") {
            uiScore = 0.85;
        } else if (UI.value == "UI_R") {
            uiScore = 0.62;
        }

        let exploitability = avScore * acScore * prScore * uiScore;
        let healthScore;
        let availScore;

        if (health.value == "health_N") {
            healthScore = 0
        } else if (health.value == "health_L") {
            healthScore = 1
        } else if (health.value == "health_H") {
            healthScore = 2
        }

        if (avail.value == "avail_N") {
            availScore = 0
        } else if (avail.value == "avail_L") {
            availScore = 1
        } else if (avail.value == "avail_H") {
            availScore = 2
        }

        const availMatrix = [[0.00, 0.22, 0.56],
        [0.55, 0.60, 0.65],
        [0.85, 0.90, 0.95]]
        const baseAvailability = availMatrix[healthScore][availScore]

        let integScore;

        if (integ.value == "integ_N") {
            integScore = 0
        } else if (integ.value == "integ_L") {
            integScore = 1
        } else if (integ.value == "integ_H") {
            integScore = 2
        }

        const integMatrix = [[0.00, 0.22, 0.56],
                            [0.55, 0.60, 0.75],
                            [0.85, 0.90, 0.95]]
        const baseIntegrity = integMatrix[healthScore][integScore]

        let sensScore;
        let confScore;

        if (conf.value == "conf_N") {
            confScore = 0
        } else if (conf.value == "conf_L") {
            confScore = 1
        } else if (conf.value == "conf_H") {
            confScore = 2
        }

        if (sens.value == "sens_N") {
            sensScore = 0
        } else if (sens.value == "sens_L") {
            sensScore = 1
        } else if (sens.value == "sens_H") {
            sensScore = 2
        }

        const confMatrix = [[0.00, 0.22, 0.56],
        [0.00, 0.65, 0.75],
        [0.00, 0.85, 0.95]]

        const baseConfidentiality = confMatrix[sensScore][confScore]

        const scoreBase = baseConfidentiality + baseIntegrity + baseAvailability

        let scopeStatus;
        if (scope.value == "scope_U") {
            scopeStatus = 1.0
        } else if (scope.value == "scope_C") {
            scopeStatus = 1.08
        }

        let scoreFinal;
        if (scoreBase == 0) {
            scoreFinal = 0
        } else {
            scoreFinal = scopeStatus * ((3.326258289 * scoreBase) + (1.1 * exploitability))
        }

        document.getElementById("score").textContent = Math.round(scoreFinal * 10) / 10

    }
}
const radioButtons=document.querySelectorAll(`input[type="radio"]`);
console.log(radioButtons)
radioButtons.forEach(element => {
    element.addEventListener("click",updateScore);
});