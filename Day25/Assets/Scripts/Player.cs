using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using TMPro;

public class Player : MonoBehaviour
{
    // Global variables
    private Vector2 targetPosition;
    public int increment, health;
    public float speed, max, min;
    public TMP_Text healthDisplay;
    public GameObject gameOver;

    // Update is called once per frame
    void Update()
    {
        // Add score into screen
        healthDisplay.text = health.ToString();

        // Checks health
        if (health <= 0)
        {
            gameOver.SetActive(true);
            Destroy(gameObject);
        }

        // Updates position
        transform.position = Vector2.MoveTowards(transform.position, targetPosition, speed * Time.deltaTime);

        if ((Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W)) && transform.position.y < max)
        {
            targetPosition = new Vector2(transform.position.x, transform.position.y + increment);
        }
        else if ((Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S)) && transform.position.y > min)
        {
            targetPosition = new Vector2(transform.position.x, transform.position.y - increment);
        }
    }
}
