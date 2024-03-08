using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class ScoreManager : MonoBehaviour
{
    // Global variables
    public int score;
    public TMP_Text scoreDisplay;

    private void Update()
    {
        scoreDisplay.text = "Score: " + score.ToString();
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Obstacle"))
        {
            score ++;
            Debug.Log(score);
        }
    }
}
